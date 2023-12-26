declare let self: ServiceWorkerGlobalScope;

class ResponseHandler {
  static DefaultCacheName = `cache_default`;

  responseCache: Cache | null = null;

  constructor() {
    this.init();
  }

  init() {
    self.addEventListener('activate', (ev) => {
      const loadCachePromise = caches
        .open(ResponseHandler.DefaultCacheName)
        .then((openedCache) => (this.responseCache = openedCache));

      ev.waitUntil(loadCachePromise);
    });
    self.addEventListener('fetch', (ev) =>
      ev.respondWith(this.handleFetch(ev)),
    );
  }

  checkTTL(response: Response) {
    const dateHeader = response.headers.get('Date');

    const cachedDate = dateHeader ? new Date(dateHeader) : new Date();
    const cacheTTL =
      response.headers.get('Cache-Control')?.match(/max-age=(\d+)/i)?.[1] ??
      '0';

    const validUntil = cachedDate.getTime() + parseInt(cacheTTL) * 1000;

    return Date.now() - validUntil <= 5000;
  }

  async cacheRequest(request: Request, response: Response | undefined) {
    if (!response) return false;
    if (request.method !== 'GET') return false;
    if (response.status >= 400) return false;

    await caches
      .open(ResponseHandler.DefaultCacheName)
      .then((cache) => cache.put(request, response.clone()));
  }

  private async handleCache(event: FetchEvent) {
    const cachedResponse = await this.responseCache?.match(event.request);

    if (!cachedResponse) return undefined;

    if (!navigator.onLine || this.checkTTL(cachedResponse)) {
      return cachedResponse;
    } else {
      // Remove expired cache.
      void this.responseCache?.delete(event.request);
    }

    return undefined;
  }

  async handleFetch(event: FetchEvent) {
    const cacheResponse = await this.handleCache(event);
    if (cacheResponse) return cacheResponse;

    let response: Response | undefined = undefined;

    response =
      (await fetch(event.request).catch((err) => void console.error(err))) ??
      new Response(null, {
        status: 500,
        statusText: 'Fetch Error',
      });

    await this.cacheRequest(event.request, response);

    return response;
  }
}

const handlerInstance = new ResponseHandler();
export default handlerInstance;
