"use client";
import Button from "@/components/blocks/button/Button";
import ButtonLink from "@/components/blocks/link/ButtonLink";
import React from "react";
import { FaSadCry } from "react-icons/fa";

export default function page() {
  return (
    <div className="bg-pr">
      <ButtonLink href="/" onClick={() => console.log("clicked")}
        startIcon={<FaSadCry />}
      
      >
        mirnmo'
      </ButtonLink>

      <Button
        className="!h-[20vh]"
        onClick={() => console.log("clicked")}
        startIcon={<FaSadCry />}
      >
        mirnmo'
      </Button>
    </div>
  );
}
