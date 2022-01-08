import { useState } from "react";


const useMergeState = (initialState) => {
  const [value, setValue] = useState(initialState);

  const mergeState = (newState) => {
    setValue({ ...value, ...newState });
  };

  return [value, mergeState];
};

export default useMergeState;
