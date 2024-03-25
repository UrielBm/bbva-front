import User from "../../Icons/User";
import "./bubbles.css";
interface MyProps {
  message: string;
}

const BubbleUserMessage = ({
  message = "hola, Uriel ¿Puedes ayudar con alguna consulta?",
}: MyProps) => {
  return (
    <div className="col-start-2 col-end-13 p-3 rounded-lg">
      <div className="flex flex-row-reverse items-start justify-start gap-1">
        <div className="flex items-center justify-center h-10 w-10 rounded-full">
          <User />
        </div>
        <div className="relative mr-3 text-md sm:text-sm lg:text-lg  py-2 px-4 shadow rounded-lg text-blue-50 messageUserbg">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
export default BubbleUserMessage;
