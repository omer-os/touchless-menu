"use client";
import { useEffect, useState } from "react";
import ButtonLink from "../../../components/elements/link/ButtonLink";
import { VariantProps, cva } from "class-variance-authority";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";

const style = cva(
  "flex justify-between drop-shadow-2xl items-center py-2 px-6 fixed sm:hidden bottom-0 z-40 left-0 right-0 bg-white",
  {
    variants: {},
  }
);

interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof style> {}

export default function BottomNavigation({ className, ...props }: Props) {
  const styles = style({
    className,
    ...props,
  });

  return (
    <div className={styles}>
      <ButtonLink size={"lg"} intent={"ghost"} href="/contact">
        <IoCallOutline size={25} />
      </ButtonLink>
      <ButtonLink size={"lg"} href="/">
        <HiOutlineSquares2X2 size={25} />
      </ButtonLink>
      <ButtonLink size={"lg"} intent={"ghost"} href="/checkout">
        <HiOutlineShoppingCart size={25} />
      </ButtonLink>
    </div>
  );
}
