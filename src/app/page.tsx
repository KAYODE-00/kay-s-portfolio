"use client";

import Cards from "@/components/Components/Cards";
import { useState } from "react";

export default function Page() {

  const [expandedCard, setExpandedCard] =
    useState<string | null>(null);

  return (
    <>
      {/* Background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%sm:_-25%,rgbasm:(125,119,198,0.3),rgba(245,245,245,0))]" />

      {/* Layout */}
      <div className="absolute inset-0  flex items-center justify-center gap-2 md:gap-4 overflow-hidden ">

        <div className="flex flex-col gap-2 md:gap-4 ">

          {/* CARD 1 */}
          <Cards
            id="card1"
            title="Work"
            styles={`
              ${
                expandedCard === "card1"
                  ? "w-[70vw] h-[70vh] z-50 md:mt-20"
                  : expandedCard
                  ?"w-15 h-15 md:w-45 md:h-45 scale-75 opacity-30"
                  : " w-25 h-25 md:w-45 md:h-45"
              }

       
              transition-all
              duration-500
            `}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />

          {/* CARD 2 */}
          <Cards
            id="card2"
            title="Stacks"
            styles={`
              ${
                expandedCard === "card2"
                  ? "w-[70vw] h-[70vh] md:mb-20 z-50 "
                  : expandedCard
                  ? "w-15 h-15 md:w-45 md:h-45 scale-75 opacity-30"
                  : "w-25 h-25 md:w-45 md:h-45"
              }

      
              transition-all
              duration-500
            `}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />

        </div>

        <div className="flex flex-col gap-2 md:gap-4">

          {/* CARD 3 */}
          <Cards
            id="card3"
            title="Projects"
            styles={`
              ${
                expandedCard === "card3"
                  ? "w-[70vw] h-[70vh] md:mt-20 z-50"
                  : expandedCard
                  ?"w-15 h-15 md:w-45 md:h-45 scale-75 opacity-30"
                  : "w-25 h-25 md:w-45 md:h-45"
              }

            
              transition-all
              duration-500
            `}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />

          {/* CARD 4 */}
          <Cards
            id="card4"
            title="Contact"
            styles={`
              ${
                expandedCard === "card4"
                  ? "w-[70vw] h-[70vh] z-50 md:mb-20"
                  : expandedCard
                  ?"w-15 h-15 md:w-45 md:h-45 scale-75 opacity-30"
                  : "w-25 h-25 md:w-45 md:h-45"
              }

             
              transition-all
              duration-500
            `}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />

        </div>

      </div>
    </>
  );
}