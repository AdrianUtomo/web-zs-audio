import React from "react";
import Image from "next/image";
import ModelContainer from "./ModelContainer";

export default function SpeakerContainer({ data }) {
  return (
    <div className="flex flex-col gap-2 items-start">
      <p className="font-bold w-full">
        {`Speaker ${data.no}. Text: ${data.text}`}
      </p>
      <div className="flex justify-between gap-2">
        <ModelContainer
          text={data["gt_text"]}
          cos={data["gt_cos"]}
          cer={data["gt_cer"]}
          mos={data["gt_mos"]}
          audio={data["gt_audio"]}
          voiceType={`Dysphonia Speaker's Voice`}
        />
        <ModelContainer
          text={data["m14_text"]}
          cos={data["m14_cos"]}
          cer={data["m14_cer"]}
          mos={data["m14_mos"]}
          audio={data["m14_audio"]}
          voiceType={`Baseline Model: A0S0P0L0`}
        />
        <ModelContainer
          text={data["m8_text"]}
          cos={data["m8_cos"]}
          cer={data["m8_cer"]}
          mos={data["m8_mos"]}
          audio={data["m8_audio"]}
          voiceType={`Best Model: A2S1P0L1`}
        />
      </div>
      <Image
        className="self-center"
        src={`/picture/${data.melpict}`}
        width={800}
        height={800}
        alt="model"
      ></Image>
    </div>
  );
}
