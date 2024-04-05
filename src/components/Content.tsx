import { useState } from "react";
import SpeakerContainer from "./SpeakerContainer";

export default function Content({ currentSpeakers }) {
  return (
    <div className="smalldesktop:grid smalldesktop:grid-cols-2 smalldesktop:grid-rows-2 gap-4 justify-center items-center flex flex-col">
      {currentSpeakers.map((data: any, idx: number) => {
        return (
          <SpeakerContainer key={data.id} data={data} />
        );
      })}
    </div>
  );
}
