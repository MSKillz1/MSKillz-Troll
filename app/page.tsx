"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Fakry ya Shahd?",
      "Mot2kda?",
      "Yabo Shahdood",
      "Fakry tany ya Shahd?",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you Come?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZ5bHd3NnU1b2FvaGc5NTd0dzA2ZHJjczdseDZkMXh4eDd2MmRpYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vgrKdk6EDpciQBUSk0/giphy-downsized-large.gif" />
        <div className="text-4xl font-bold my-4">Ya salaaaaam ♡ !!!</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanBtNWh5OWJjNWQweXF4cDBsY293YXF5a3ZhYXkxeTY4OXIyN2RvMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CRTH5z0rBHdmqOZE8B/giphy-downsized-large.gif" />
          <h1 className="text-4xl my-4">Tl3by ya shahd?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}