import React from "react";
import { IconType } from "react-icons";
import CopyCode from "./ui/copy-code";

interface Props {
  Icon: IconType;
  path: string;
  language: string;
  color?: string;
  code: string;
}

const CodeWrapper = ({
  Icon,
  path,
  language,
  color = "#FF738A",
  code,
}: Props) => {
  return (
    <div className="code-wrapper w-full my-2 overflow-x-auto">
      <div className="flex p-2 text-neutral-500 items-center gap-x-1">
        <Icon />
        <p className="font-mono text-sm">{path}</p>
      </div>
      <CopyCode code={code} language={language} color={color} />
    </div>
  );
};

export default CodeWrapper;
