import Markdown from "react-markdown";
import Idea from "../../Icons/Idea";
import { useContext } from "react";
import StatusContext from "../../../context/statusContext";
import "./bubbles.css";
interface MyProps {
  message?: string;
}

const ChatGptMessage = ({
  message = "Hola 👋, soy Blue, tu asistente de BBVA. ¿Gustas proporcionarme tu nombre y en qué puedo ayudarte hoy?",
}: MyProps) => {
  const appContext = useContext(StatusContext);
  return (
    <div className="col-start-1 col-end-12 p-3 rounded-lg">
      <div className="flex flex-row items-start justify-start gap-1">
        <div className="flex items-center justify-center h-10 w-10 rounded-full">
          <Idea />
        </div>
        <div className="sm:text-sm lg:text-lg py-2 px-4 shadow rounded-lg">
          {appContext?.initialState.status ? (
            <Markdown>{message}</Markdown>
          ) : (
            <div>
              <h3>Sin conexión</h3>
              <p className="mb-1">
                Hola 👋, soy Blue. Al parecer, no tienes conexión a internet.
                Por el momento, no puedo brindarte un servicio eficiente.
                Intenta más tarde 🤕.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ChatGptMessage;
