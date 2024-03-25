import { FormEvent, useState } from "react";
import "./form.css";
import Send from "../../Icons/Send";
interface MyProps {
  handleSendMessage: (message: string) => void;
}
const InputText = ({ handleSendMessage }: MyProps) => {
  const [message, setMessage] = useState("");
  const handlePostMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === "") return;
    handleSendMessage(message);
    setMessage("");
  };
  return (
    <form
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full pr-4"
      onSubmit={handlePostMessage}
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            type="text"
            autoFocus
            name="message"
            className="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-blue-700 p-2"
            placeholder="Escribe tu consulta aquí."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="ml-4">
        <button
          type="submit"
          className="btn-primary buttonbg flex items-center justify-center gap-1"
        >
          Enviar <Send />
        </button>
      </div>
    </form>
  );
};
export default InputText;
