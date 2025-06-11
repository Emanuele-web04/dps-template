'use client'

import React from "react";
import Button3D from "./button-3d";

const AddToCart = ({price}: {price: number}) => {
  return (
    <Button3D
      id={"cart"}
      onclick={() => console.log("print")}
      disabled={false}
      content={`Add to Cart - $${price}`}
      ref={undefined}
      padding="py-3 md:py-2 px-5 w-full! md:w-fit!"
    />
  );
};

export default AddToCart;
