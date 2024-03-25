import { ReplicaInterface } from "../interfaces/ReplicaInterface";

export const askQuestionUseCase = async(question: string) => {
    try {
        const threadId = localStorage.getItem("threadId");
        const response = await fetch(`${import.meta.env.VITE_API_PATH}/user-question`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({threadId,question})
        })
        const replies = await response.json() as ReplicaInterface[]
        return replies
    } catch (error) {
        
    }

}