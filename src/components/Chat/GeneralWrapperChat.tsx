import { useEffect, useRef, useState } from "react";
import Spinner from "../Spinner/Spinner";
import BubbleUserMessage from "./Bubbles/BubbleUserMessage";
import ChatGptMessage from "./Bubbles/ChatGptMessage";
import InputText from "./Form/InputText";
import { Messages } from "../../interfaces/generalInterfaces";
import { askQuestionUseCase, createThreadUseCase } from "../../UseCase";

const GeneralWrapperChat = () => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    handleCreateThreadId();
  }, []);
  useEffect(() => {
    if (bottomPanelRef.current) {
      bottomPanelRef.current.scrollIntoView();
    }
  }, [messages]);

  const handleCreateThreadId = async () => {
    try {
      const threadId = localStorage.getItem("threadId");
      if (!threadId) {
        const response = await createThreadUseCase();
        localStorage.setItem("threadId", response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePostAMessage = async (message: string) => {
    try {
      setIsLoading(true);
      setMessages((prev) => [...prev, { message: message, role: "user" }]);
      if (!localStorage.getItem("threadId")) {
        setMessages((prev) => [
          ...prev,
          {
            message:
              "Al parecer no tienes conexión a internet o falló la comunicación para recuperar el hilo. Lo sentimos mucho, intenta más tarde 🤕",
            role: "assistant",
          },
        ]);
        setIsLoading(false);
        return;
      }
      const messages = await askQuestionUseCase(message);
      setMessages([]);
      for (const reply of messages!) {
        for (const message of reply.content) {
          setMessages((prev) => [...prev, { message, role: reply.role }]);
        }
      }
      setIsLoading(false);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          message:
            "No pudimos generar una respuesta para tu pregunta, lo sentimos. Intenta más tarde 🤕",
          role: "assistant",
        },
      ]);
      setIsLoading(false);
      return;
    }
  };
  return (
    <main className="chat-container">
      <section className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <ChatGptMessage />
          {messages.length > 0 &&
            messages.map(({ message, role }, index) =>
              role === "assistant" ? (
                <ChatGptMessage key={index} message={message} />
              ) : (
                <BubbleUserMessage key={index} message={message} />
              )
            )}
          {isLoading && (
            <div className="col-start-1 col-end-2 p-3">
              <Spinner />
            </div>
          )}
        </div>
        <div ref={bottomPanelRef}></div>
      </section>
      <div className="px-4 fixed bottom-0 flex justify-center w-full">
        <InputText
          handleSendMessage={(message) => handlePostAMessage(message)}
        />
      </div>
    </main>
  );
};
export default GeneralWrapperChat;
