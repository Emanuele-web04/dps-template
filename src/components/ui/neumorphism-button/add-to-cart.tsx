"use client";

import React from "react";
import Button3D from "./button-3d";

const AddToCart = ({
  price,
  text = "Add to Cart",
  padding = "py-3 md:py-2 px-5 w-full! md:w-fit!",
}: {
  price: number;
  text?: string;
  padding?: string;
}) => {
  return (
    <Button3D
      id={"cart"}
      onclick={() => console.log("print")}
      disabled={false}
      content={`${text} - $${price}`}
      ref={undefined}
      padding={padding}
    />
  );
};

export default AddToCart;
