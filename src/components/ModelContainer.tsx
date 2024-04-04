import React from "react";
import Image from "next/image";

export default function ModelContainer({text, cos, cer, mos, audio, voiceType}) {
  return (
    <div className="flex flex-col text-xs">
      <p>{voiceType}</p>
      <audio className="h-[35px]" controls src={`/audio/${audio}`}></audio>
      <p>{`ASR: ${text}`}</p>
      <div className="flex gap-2">
        <p>{`COS: ${cos}`}</p>
        <p>{`CER: ${cer}`}</p>
        <p>{`MOS: ${mos}`}</p>
      </div>
    </div>
  )
}