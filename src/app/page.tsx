"use client";

import { projects } from "@/data/projects";
import Cards from "@/components/Components/Cards";
import { useState } from "react";

export default function Page() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <>
      {/* Background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-25%,rgba(125,119,198,0.3),rgba(245,245,245,0))]" />

      {/* Layout */}
      <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-4 overflow-hidden">
        <div className="flex flex-col gap-2 md:gap-4">
          {/* CARD 1 */}
          <Cards
            id="card1"
            title="Work"
            styles={`
              ${
                expandedCard === "card1"
                  ? "w-[70vw] h-[70vh] z-50 md:mt-20"
                  : expandedCard
                    ? "w-15 h-15 md:w-45 md:h-45 scale-75 opacity-30"
                    : "w-25 h-25 md:w-45 md:h-45"
              }

             
              transition-all
              duration-500
            `}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          >
            <div className="flex flex-col gap-6 h-full">
              <h1 className="text-4xl font-bold">Work</h1>

              {/* content */}
              <div className=" grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-6">
                {/* button */}
                <div className="flex items-center justify-center gap-3">
                  <button className="bg-black/20 text-[0.9rem]  rounded-2xl p-2">
                    Freelance Projects
                  </button>

                  <button className="bg-black/20 text-[0.9rem] rounded-2xl p-2">
                    UI/UX Designs
                  </button>
                </div>

                <div className="grid md:grid-cols-2 ">
{projects.map((project) => {
  return (
    <div
      key={project.id}
      className="bg-black/20 rounded-2xl gap-5 p-4 flex flex-col border border-neutral-700/50"
    >
      {/* IMAGE */}
      <img
        src="/brickbase.png"
        alt={project.title}
        className="rounded-xl object-cover"
      />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center">
        <h1 className="text-xl font-bold">
          {project.title}
        </h1>

        <a
          href="#"
          className="text-sm text-blue-400 hover:underline"
        >
          View Project
        </a>
      </div>

      {/* TECH STACK */}
      <p className="text-sm text-neutral-400">
        {project.technologies}
      </p>

      {/* DESCRIPTION */}
      <p className="text-sm text-neutral-300">
        {project.description}
      </p>
    </div>
  );
})}
                  
                </div>
              </div>
            </div>
          </Cards>

          {/* CARD 2 */}
          <Cards
            id="card2"
            title="Stacks"
            styles={`
              ${
                expandedCard === "card2"
                  ? "w-[70vw] h-[70vh] md:mb-20 z-50"
                  : expandedCard
                    ? "w-15 h-15 md:w-45 md:h-45 scale-75 opacity-30"
                    : "w-25 h-25 md:w-45 md:h-45"
              }

           
              transition-all
              duration-500
            `}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          >
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold">Stacks</h1>

              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-xl bg-black/20">Next.js</div>

                <div className="px-4 py-2 rounded-xl bg-black/20">
                  TypeScript
                </div>

                <div className="px-4 py-2 rounded-xl bg-black/20">Tailwind</div>

                <div className="px-4 py-2 rounded-xl bg-black/20">
                  Framer Motion
                </div>
              </div>
            </div>
          </Cards>
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
                    ? "w-15 h-15 md:w-45 md:h-45 scale-75 opacity-30"
                    : "w-25 h-25 md:w-45 md:h-45"
              }

         
              transition-all
              duration-500
            `}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          >
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold">Projects</h1>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-black/20 p-4">QAY Builder</div>

                <div className="rounded-2xl bg-black/20 p-4">
                  Portfolio System
                </div>
              </div>
            </div>
          </Cards>

          {/* CARD 4 */}
          <Cards
            id="card4"
            title="Contact"
            styles={`
              ${
                expandedCard === "card4"
                  ? "w-[70vw] h-[70vh] md:mb-20 z-50"
                  : expandedCard
                    ? "w-15 h-15 md:w-45 md:h-45 scale-75 opacity-30"
                    : "w-25 h-25 md:w-45 md:h-45"
              }

       
              transition-all
              duration-500
            `}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          >
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold">Contact</h1>

              <div className="flex flex-col gap-3">
                <div className="bg-black/20 p-4 rounded-2xl">Email</div>

                <div className="bg-black/20 p-4 rounded-2xl">Twitter</div>

                <div className="bg-black/20 p-4 rounded-2xl">GitHub</div>
              </div>
            </div>
          </Cards>
        </div>
      </div>
    </>
  );
}
