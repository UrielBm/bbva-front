import { useState } from "react";
import StatusContext from "./statusContext";

interface initalStateInterface {
  status: boolean;
}
interface childrenProps {
  children: JSX.Element;
}

const StatusState = (props: childrenProps) => {
  const [initialState, setInitialState] = useState<initalStateInterface>({
    status: navigator.onLine,
  });
  return (
    <StatusContext.Provider value={{ initialState }}>
      {props.children}
    </StatusContext.Provider>
  );
};
export default StatusState;
