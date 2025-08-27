import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-full h-[calc(100dvh-96px)] sm:h-[calc(100dvh-100px)] lg:h-[calc(100dvh-120px)] flex flex-col items-center justify-center relative`}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="font-nyghtserif text-9xl sm:text-[200px] md:text-[300px] lg:text-[400px] font-bold text-nyghtserif2 opacity-5">
          404
        </div>
      </div>

      <div className="flex gap-6 flex-col items-center justify-center z-10">
        <span className="text-body-2xl text-brand-primary font-semibold">
          PAGE NOT FOUND
        </span>
        <span className="text-h2 font-nyghtserif font-bold text-center">
          Uh Oh! Something went wrong
        </span>
        <span className="font-dream text-body-lg">
          Sorry, we can't seem to find the page you're looking for...
        </span>
        <button
          className="bg-nyghtserif2 text-neutral-50 p-4"
          onClick={() => navigate("/")}
        >
          Take me Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
