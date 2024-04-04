import { useState } from "react";
import SpeakerContainer from "./SpeakerContainer";

export default function Content({currentSpeakers}) {
  return (
    <div className="flex flex-col items-center justify-center gap-9 w-[800px] max-w-full">
      {currentSpeakers.map((data: any, idx: number) => {
        return <SpeakerContainer key={data.fid} data={data} speakerNumber={idx+1} />;
      })}
    </div>
  );
}
