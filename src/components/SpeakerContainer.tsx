import React from "react";
import ModelContainer from "./ModelContainer";

export default function SpeakerContainer() {
  return (
    <div className="flex flex-col items-center">
      <p>Speaker 1. Text: but that heritage is shrinking even faster</p>
      <div className="flex">
        <ModelContainer />
      </div>
    </div>
  );
}
