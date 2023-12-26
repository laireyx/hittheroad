import { useEffect, useState } from 'react';

import { clockBoxStyle, clockStyle } from './index.css';

export default function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const callback = () => {
      const format = new Intl.DateTimeFormat('ko-KR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
      setTime(format.format(new Date()));
    };
    const handle = setInterval(callback, 1000);

    callback();

    return () => clearInterval(handle);
  }, []);

  return (
    <div className={clockBoxStyle}>
      <span className={clockStyle}>{time}</span>
    </div>
  );
}
