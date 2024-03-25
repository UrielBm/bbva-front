import Markdown from "react-markdown";
import Idea from "../../Icons/Idea";

interface MyProps {
  message?: string;
}
const ChatGptMessage = ({
  message = "Hola Soy Uriel de BBVA ¿Gustas proporcionarme tu nombre y en qué puedo ayudarte hoy?",
}: MyProps) => {
  return (
    <div className="col-start-1 col-end-12 p-3 rounded-lg">
      <div className="flex flex-row items-start justify-start gap-1">
        <div className="flex items-center justify-center h-10 w-10 rounded-full">
          <Idea />
        </div>
        <div className="sm:text-sm lg:text-lg py-2 px-4 shadow rounded-lg">
          <Markdown>{message}</Markdown>
        </div>
      </div>
    </div>
  );
};
export default ChatGptMessage;
