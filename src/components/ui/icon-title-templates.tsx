import React from "react";

interface IconTitleTemplatesProps {
  icon: React.JSX.Element;
  text: string;
}

const IconTitleTemplates = ({ icon, text }: IconTitleTemplatesProps) => {
  return (
    <div className="flex justify-center gap-3 my-8 items-center">
      {icon}
      <h3 className="h3-title">{text}</h3>
    </div>
  );
};

export default IconTitleTemplates;
