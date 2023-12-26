// eslint-disable-next-line @typescript-eslint/no-misused-promises
window.addEventListener('load', async () => {
  // Do not install service worker in development mode: it breaks hot-reloading
  if (import.meta.env.DEV) {
    return;
  }

  // SW install
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        new URL('./sw.js', location.href),
        {
          type: 'module',
        },
      );

      await registration.update();

      // Registration was successful
      console.log(
        'ServiceWorker registration successful with scope: ',
        registration.scope,
      );
    } catch (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    }
  }
});
