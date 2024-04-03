import React from "react";
import Image from "next/image";

export default function ModelContainer() {
  return (
    <div>
      <p>{`Dysphonia Speaker's Voice`}</p>
      <audio className="" controls src="/audio/FD07_T2_si481_NA-1860-gt.wav"></audio>
      <p>{`ASR: but that air of tiches is shrinking faster`}</p>
      <div className="flex gap-2">
        <p>{`COS: 0.653`}</p>
        <p>{`CER: 35.71`}</p>
        <p>{`MOS: 3.008`}</p>
      </div>
      <Image src={`/picture/mel_FD07_1860.png`} width={10} height={10} alt="model"></Image>
    </div>
  )
}