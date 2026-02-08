import { useState } from "react";

const useSetStateWithLogging = (initialValue = 0) => {
  const [state, setState] = useState(initialValue);

  const setStateWithLogging = (value) => {
    console.log("state change:", value);
    setState(value);
  };

  return [state, setStateWithLogging];
};

export default useSetStateWithLogging;
