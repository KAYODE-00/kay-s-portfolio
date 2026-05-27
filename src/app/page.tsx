"use client";

import { projects } from "@/data/projects";
import { frontendStacks } from "@/data/projects";
import { backendStacks } from "@/data/projects";
import { stacksBtn } from "@/data/projects";
import { noCodeStacks } from "@/data/projects";

import Cards from "@/components/Components/Cards";
import { useState } from "react";

export default function Page() {
  const [expandedCard, setExpandedCard] =
    useState<string | null>(null);

  const [stackState, setStackState] =
    useState<number | null>(1);

  return (
    <>
      {/* BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden -z-10 bg-[#0B100B]">
        
        {/* gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(95,255,145,0.08),transparent_35%)]" />

        {/* bubbles */}
        <div className="relative w-full h-full flex items-center justify-center">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className={`bubble bubble-${index + 1}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ))}
        </div>
      </div>

      {/* PAGE */}
      <main className="relative min-h-screen w-full overflow-hidden px-3 py-6 md:px-8">
        
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
          
          {/* LEFT */}
          <div className="flex flex-col gap-4">
            
            {/* WORK */}
            <Cards
              id="card1"
              title="Work"
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
              styles={`
                ${
                  expandedCard === "card1"
                    ? "h-[88vh]"
                    : expandedCard
                    ? "h-[120px] opacity-30 scale-[0.97]"
                    : "h-[260px]"
                }
              `}
            >
              <div className="flex flex-col gap-6 h-full">
                
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-white">
                    Work
                  </h1>

                  <p className="text-neutral-400 mt-2">
                    Selected projects and digital experiences.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="
                        group
                        bg-white/[0.03]
                        border
                        border-white/10
                        rounded-[2rem]
                        overflow-hidden
                        hover:bg-white/[0.05]
                        transition-all
                        duration-500
                      "
                    >
                      <div className="overflow-hidden">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="
                            w-full
                            h-[220px]
                            object-cover
                            group-hover:scale-105
                            transition-all
                            duration-700
                          "
                        />
                      </div>

                      <div className="p-5 flex flex-col gap-4">
                        
                        <div className="flex items-center justify-between gap-4">
                          <h1 className="text-xl font-bold text-white">
                            {project.title}
                          </h1>

                          <a
                            href={project.url}
                            className="
                              text-xs
                              px-4
                              py-2
                              rounded-full
                              bg-white
                              text-black
                              font-semibold
                              hover:scale-105
                              transition-all
                            "
                          >
                            Visit
                          </a>
                        </div>

                        <p className="text-sm text-neutral-400">
                          {project.description}
                        </p>

                        <p className="text-xs text-neutral-500">
                          {project.technologies}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Cards>

            {/* STACKS */}
            <Cards
              id="card2"
              title="Stacks"
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
              styles={`
                ${
                  expandedCard === "card2"
                    ? "h-[88vh]"
                    : expandedCard
                    ? "h-[120px] opacity-30 scale-[0.97]"
                    : "h-[260px]"
                }
              `}
            >
              <div className="flex flex-col gap-6 h-full">
                
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-white">
                    Stacks
                  </h1>

                  <p className="text-neutral-400 mt-2">
                    Tools, frameworks and systems I use.
                  </p>
                </div>

                {/* buttons */}
                <div className="flex flex-wrap gap-3">
                  {stacksBtn.map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setStackState(btn.id)}
                      className={`
                        px-5
                        py-3
                        rounded-2xl
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        border

                        ${
                          stackState === btn.id
                            ? "bg-white text-black border-white"
                            : "bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.06]"
                        }
                      `}
                    >
                      {btn.title}
                    </button>
                  ))}
                </div>

                {/* frontend */}
                {stackState === 1 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {frontendStacks.map((stack) => (
                      <div
                        key={stack.id}
                        className="
                          bg-white/[0.03]
                          border
                          border-white/10
                          rounded-3xl
                          p-5
                          hover:bg-white/[0.06]
                          transition-all
                          duration-300
                        "
                      >
                        <p className="text-white font-medium">
                          {stack.title}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* backend */}
                {stackState === 2 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {backendStacks.map((stack) => (
                      <div
                        key={stack.id}
                        className="
                          bg-white/[0.03]
                          border
                          border-white/10
                          rounded-3xl
                          p-5
                          hover:bg-white/[0.06]
                          transition-all
                          duration-300
                        "
                      >
                        <p className="text-white font-medium">
                          {stack.title}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* nocode */}
                {stackState === 4 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {noCodeStacks.map((stack) => (
                      <div
                        key={stack.id}
                        className="
                          bg-white/[0.03]
                          border
                          border-white/10
                          rounded-3xl
                          p-5
                          hover:bg-white/[0.06]
                          transition-all
                          duration-300
                        "
                      >
                        <p className="text-white font-medium">
                          {stack.title}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Cards>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            
            {/* ABOUT */}
            <Cards
              id="card3"
              title="About"
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
              styles={`
                ${
                  expandedCard === "card3"
                    ? "h-[88vh]"
                    : expandedCard
                    ? "h-[120px] opacity-30 scale-[0.97]"
                    : "h-[260px]"
                }
              `}
            >
              <div className="flex flex-col gap-8">
                
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-white">
                    About
                  </h1>

                  <p className="text-neutral-400 mt-2">
                    Developer. Builder. Creative engineer.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  
                  <img
                    src="/devImg.jpg"
                    alt=""
                    className="
                      w-full
                      md:w-[280px]
                      h-[320px]
                      object-cover
                      rounded-[2rem]
                      border
                      border-white/10
                    "
                  />

                  <div className="flex flex-col gap-5">
                    
                    <div>
                      <h1 className="text-3xl font-black text-white">
                        Abdulwahab Kayode
                      </h1>

                      <p className="text-neutral-300 mt-2 leading-relaxed">
                        I build modern interfaces, AI-powered products,
                        scalable startup systems and immersive digital
                        experiences with strong focus on design systems
                        and performance.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Next.js",
                        "AI Systems",
                        "Design Engineering",
                        "SaaS",
                      ].map((item) => (
                        <div
                          key={item}
                          className="
                            bg-white/[0.03]
                            border
                            border-white/10
                            rounded-2xl
                            p-4
                          "
                        >
                          <p className="text-sm text-white">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Cards>

            {/* CONTACT */}
            <Cards
              id="card4"
              title="Contact"
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
              styles={`
                ${
                  expandedCard === "card4"
                    ? "h-[88vh]"
                    : expandedCard
                    ? "h-[120px] opacity-30 scale-[0.97]"
                    : "h-[260px]"
                }
              `}
            >
              <div className="relative h-full">
                
                {/* glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full" />

                <div className="relative z-10 flex flex-col gap-8 h-full">
                  
                  {/* header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    
                    <div>
                      <h1 className="text-4xl md:text-5xl font-black text-white">
                        Contact
                      </h1>

                      <p className="text-neutral-400 mt-2 max-w-[550px]">
                        Talk with my AI assistant or send a direct
                        message for projects, startups and collaborations.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-400/20 px-4 py-2 rounded-full w-fit">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                      <p className="text-xs text-emerald-200">
                        AI Online
                      </p>
                    </div>
                  </div>

                  {/* content */}
                  <div className="grid xl:grid-cols-2 gap-6 h-full">
                    
                    {/* ai side */}
                    <div
                      className="
                        rounded-[2rem]
                        bg-white/[0.03]
                        border
                        border-white/10
                        p-6
                        flex
                        flex-col
                        justify-between
                        gap-6
                      "
                    >
                      <div className="flex flex-col gap-5">
                        
                        <div className="flex items-center gap-4">
                          
                          <div className="relative">
                            <img
                              src="/devImg.jpg"
                              alt=""
                              className="
                                w-24
                                h-24
                                rounded-[1.5rem]
                                object-cover
                                border
                                border-white/10
                              "
                            />

                            <div className="absolute -bottom-2 -right-2 bg-emerald-300 text-black text-xs font-bold px-3 py-1 rounded-full">
                              AI
                            </div>
                          </div>

                          <div>
                            <h1 className="text-3xl font-black text-white">
                              Abdulwahab AI
                            </h1>

                            <p className="text-neutral-400 text-sm mt-2">
                              A digital version of me trained for
                              founders, developers and creators.
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {[
                            "AI Builders",
                            "SaaS",
                            "Frontend",
                            "Branding",
                            "Next.js",
                            "Automation",
                          ].map((item) => (
                            <div
                              key={item}
                              className="
                                px-4
                                py-2
                                rounded-full
                                bg-white/[0.05]
                                border
                                border-white/10
                                text-sm
                                text-neutral-200
                              "
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        className="
                          h-14
                          rounded-2xl
                          bg-white
                          text-black
                          font-bold
                          hover:scale-[1.02]
                          active:scale-[0.99]
                          transition-all
                          duration-300
                        "
                      >
                        Launch AI Chatbot
                      </button>
                    </div>

                    {/* form */}
                    <div
                      className="
                        rounded-[2rem]
                        bg-white/[0.03]
                        border
                        border-white/10
                        p-6
                        flex
                        flex-col
                        gap-5
                      "
                    >
                      <div>
                        <h1 className="text-3xl font-black text-white">
                          Direct Message
                        </h1>

                        <p className="text-neutral-400 mt-2 text-sm">
                          Let’s build something powerful together.
                        </p>
                      </div>

                      <div className="flex flex-col gap-4">
                        
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="
                            h-14
                            rounded-2xl
                            bg-black/20
                            border
                            border-white/10
                            px-5
                            text-white
                            placeholder:text-neutral-500
                            outline-none
                            focus:border-emerald-300/40
                          "
                        />

                        <input
                          type="email"
                          placeholder="Your Email"
                          className="
                            h-14
                            rounded-2xl
                            bg-black/20
                            border
                            border-white/10
                            px-5
                            text-white
                            placeholder:text-neutral-500
                            outline-none
                            focus:border-emerald-300/40
                          "
                        />

                        <textarea
                          rows={6}
                          placeholder="Tell me about your idea..."
                          className="
                            rounded-2xl
                            bg-black/20
                            border
                            border-white/10
                            p-5
                            text-white
                            placeholder:text-neutral-500
                            outline-none
                            resize-none
                            focus:border-emerald-300/40
                          "
                        />

                        <button
                          className="
                            h-14
                            rounded-2xl
                            bg-gradient-to-r
                            from-white
                            to-neutral-300
                            text-black
                            font-bold
                            hover:scale-[1.02]
                            transition-all
                            duration-300
                          "
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Cards>
          </div>
        </div>
      </main>
    </>
  );
}