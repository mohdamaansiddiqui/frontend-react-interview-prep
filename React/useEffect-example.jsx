import { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => console.log("Tick"), 1000);
    return () => clearInterval(timer);
  }, []);
  return <div>Timer running...</div>;
}