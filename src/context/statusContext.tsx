import { createContext } from "react";

interface myContext {
  initialState: { status: boolean };
}

const StatusContext = createContext<myContext | null>(null);

export default StatusContext;
