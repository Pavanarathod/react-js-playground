import { useEffect, useState } from "react";

const useCounter = (value = true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("this is counter");
    const interval = setInterval(() => {
      if (value) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
