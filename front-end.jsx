import React, { useCallback, useState } from "react";
import Title from "./Title";
import RecordMessage from "./RecordMessage";
import axios from "axios";

export default function Controller() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  const createBlogUrl = (data: any) => {
    const blob = new Blob([data], { type: "audio/mpeg" });
    const url = window.URL.createObjectURL(blob);
    return url;
  };

  const handleStop = async (blobUrl: any) => {
    setIsLoading(true);

    const myMessage = { sender: "me", blobUrl };
    const messageArr = [...messages, myMessage];

    fetch(blobUrl)
      .then((res) => res.blob())
      .then(async (blob) => {
        const formData = new FormData();
        formData.append("file", blob, "myFile.wav");

        await axios
          .post("http://127.0.0.1:8000/post-audio", formData, {
            headers: {
              "Content-Type": "audio/mpeg",
            },
            responseType: "arraybuffer",
          })
          .then((res) => {
            const blob = res.data;
            const audio = new Audio();
            audio.src = createBlogUrl(blob);

            const rachelMessage = { sender: "rachel", blobUrl: audio.src };
            messageArr.push(rachelMessage);
            setMessages(messageArr);
            setIsLoading(false);
            audio.play();
          })
          .catch((err: any) => {
            console.error(err);
            setIsLoading(false);
          });
      });
  };

  return (
    <div className="h-screen overflow-y-hidden bg-cover bg-center">
      <Title setMessages={setMessages} />
      <div className="flex flex-col justify-between h-full overflow-y-scroll pb-96">
        <div className="mt-5 px-5">
          {messages?.map((audio, index) => {
            return (
              <div
                key={index + audio.sender}
                className={
                  "flex flex-col " +
                  (audio.sender == "rachel" && "flex items-end")
                }
              >
                <div className="mt-4">
                  <p
                    className={
                      audio.sender == "rachel"
                        ? "text-right mr-2 italic text-green-500"
                        : "ml-2 italic text-blue-500"
                    }
                  >
                    {audio.sender}
                  </p>
                  <audio
                    src={audio.blobUrl}
                    className="appearance-none"
                    controls
                  ></audio>
                </div>
              </div>
            );
          })}
          {messages.length == 0 && !isLoading && (
            <div className="text-center font-light italic mt-10">
              Send Rachel a message...
            </div>
          )}
            {isLoading && (
            <div className="text-center font-light italic mt-10 animate-pulse">
              Gimme a few seconds...
            </div>
          )}
        </div>
        <div className="fixed bottom-0 w-full py-6 border-t text-center bg-gray-100">
          <div className="flex justify-center items-center w-full">
            <RecordMessage handleStop={handleStop} />
          </div>
        </div>
      </div>
    </div>
  );
}

