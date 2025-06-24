"use client";

import React from "react";
import Button3D from "./button-3d";

const BuyPrice = ({
  text = "Add to Cart",
  padding = "py-3 md:py-2 px-5 w-full! md:w-fit!",
  fontSize = "font-semibold",
}: {
  price: number;
  text?: string;
  padding?: string;
  fontSize?: string;
}) => {
  return (
    <Button3D
      id={"price"}
      onclick={() => console.log("print")}
      disabled={false}
      content={`${text}`}
      ref={undefined}
      padding={padding}
      fontSize={fontSize}
    />
  );
};

export default BuyPrice;
