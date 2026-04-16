import { useState, useEffect, useRef } from "react";

export default function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  console.log(isRunning);
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      // Dùng functional update để tránh stale closure
      setSeconds((prev) => prev + 1);
    }, 1000);
    console.log(intervalRef.current);

    // Cleanup: chạy trước khi effect chạy lại (isRunning thay đổi)
    // VÀ khi component unmount.
    // Nếu bỏ dòng này: interval sống mãi sau khi component biến mất → memory leak
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const format = (s) => {
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <p className="count-display">{format(seconds)}</p>
      <div className="btn-group">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
