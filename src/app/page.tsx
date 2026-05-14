"use client";

import Cards from "@/components/Components/Cards";
import { useState } from "react";

export default function Page() {

  const [expandedCard, setExpandedCard] =
    useState<string | null>(null);

  return (
    <>
      {/* Background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Layout */}
      <div className="absolute inset-0 flex items-center justify-center gap-4">

        <div className="flex flex-col gap-4">

          {/* CARD 1 */}
          <Cards
            id="card1"
            title="Home"
            styles={`
              ${
                expandedCard === "card1"
                  ? "w-[80vw] h-[70vh] z-50"
                  : expandedCard
                  ? "w-24 h-24 scale-75 opacity-40"
                  : "w-40 h-40 md:w-55 md:h-55"
              }

              bg-red-500
              transition-all
              duration-500
            `}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />

          {/* CARD 2 */}
          <Cards
            id="card2"
            title="About"
            styles={`
              ${
                expandedCard === "card2"
                  ? "w-[80vw] h-[70vh] z-50"
                  : expandedCard
                  ? "w-24 h-24 scale-75 opacity-40"
                  : "w-40 h-40 md:w-55 md:h-55"
              }

              bg-red-900
              transition-all
              duration-500
            `}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />

        </div>

        <div className="flex flex-col gap-4">

          {/* CARD 3 */}
          <Cards
            id="card3"
            title="Projects"
            styles={`
              ${
                expandedCard === "card3"
                  ? "w-[80vw] h-[70vh] z-50"
                  : expandedCard
                  ? "w-24 h-24 scale-75 opacity-40"
                  : "w-40 h-40 md:w-55 md:h-55"
              }

              bg-blue-500
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
                  ? "w-[80vw] h-[70vh] z-50"
                  : expandedCard
                  ? "w-24 h-24 scale-75 opacity-40"
                  : "w-40 h-40 md:w-55 md:h-55"
              }

              bg-yellow-500
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