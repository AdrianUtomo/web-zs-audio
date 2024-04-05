import { useState } from "react";
import SpeakerContainer from "./SpeakerContainer";

export default function Content({ currentSpeakers }) {
  return (
    <div className="2xl:grid 2xl:grid-cols-2 2xl:grid-rows-2 gap-4 justify-center items-center flex flex-col">
      {currentSpeakers.map((data: any, idx: number) => {
        return (
          <SpeakerContainer key={data.id} data={data} />
        );
      })}
    </div>
  );
}
