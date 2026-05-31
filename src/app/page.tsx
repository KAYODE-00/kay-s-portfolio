"use client";

import { projects } from "@/data/projects";
import { frontendStacks } from "@/data/projects";
import { backendStacks } from "@/data/projects";
import { stacksBtn } from "@/data/projects";
import { noCodeStacks } from "@/data/projects";

import Cards from "@/components/Components/Cards";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showAi, setShowAi] = useState<boolean | null>(null);
  const [messages, setMessages] = useState([
  { role: "ai", content: "Hi 👋 How can I help you today?" },
]);

const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);

const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { role: "user", content: input };
  const updatedMessages = [...messages, userMessage];

  setMessages(updatedMessages);
  setInput("");
  setLoading(true);

  // Simulate AI response (replace with real API call)
  setTimeout(() => {
    const aiMessage = {
      role: "ai",
      content: "Got it. I’m processing your request and will help you build that 🚀",
    };

    setMessages((prev) => [...prev, aiMessage]);
    setLoading(false);
  }, 1200);
};
  // const [expandPanel, setExpandPanel] = useState<boolean | null>(null);

  const [stackState, setStackState] = useState<number | null>(1);

const endRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  requestAnimationFrame(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  });
}, [messages, loading]);

  return (
    <>
      {/* BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden -z-10 bg-[#0B100B]">
        {/* gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(95,255,145,0.08),transparent_35%)]" />

        {/* bubbles */}
        <div className="relative w-full h-full flex items-center justify-center">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className={`bubble bubble-${index + 1}`}>
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
      <main className="relative min-h-screen flex justify-center w-full overflow-hidden md:px-2   py-3 md:px-8">
        <div className="max-w-[1700px] flex justify-center items-center  gap-4 overflow-hidden">
          {/* LEFT */}
          <div className=" flex flex-col  gap-2 md:gap-4 ">
            {/* WORK */}
            <Cards
              id="card1"
              title="Work"
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
              styles={`
                ${
                  expandedCard === "card1"
                    ? "h-[78vh] w-[90vw] absolute left-11 z-9 md:h-[80vh] md:w-auto "
                    : expandedCard
                      ? "h-[70px] w-[70px]  md:h-[100px] md:w-[100px] opacity-30 scale-[0.97]"
                      : "h-[100px] items-center w-[100px]"
                }
              `}
            >
              <div className="flex flex-col  gap-6 h-full">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-white">
                    Work
                  </h1>

                  <p className="text-neutral-400 mt-2 ">
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
                    ? "h-[78vh] w-[90vw] absolute left-11 bottom-7 z-9 md:h-[80vh] md:w-auto "
                    : expandedCard
                      ? "h-[70px] w-[70px]  md:h-[100px] md:w-[100px] opacity-30 scale-[0.97]"
                      : "h-[100px] items-center w-[100px]"
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
                <div className="flex  gap-3">
                  {stacksBtn.map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setStackState(btn.id)}
                      className={`
                        px-3
                        py-1
                        w-20
                        rounded-2xl
                        text-[0.6rem]
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
                          w-22
                          md:w-30
                          py-2
                          px-3
                          border-white/10
                          rounded-3xl
                          hover:bg-white/[0.06]
                          transition-all
                          duration-300
                        "
                      >
                        <p className="text-white font-medium  text-[0.5rem]   ">
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
w-22
                          md:w-30
                          py-2
                          px-3
                          border-white/10
                          rounded-3xl
                          
                          hover:bg-white/[0.06]
                          transition-all
                          duration-300
                        "
                      >
                        <p className="text-white font-medium  text-sm  ">
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
                          w-22
                          md:w-30
                          py-2
                          px-3
                          border-white/10
                          rounded-3xl
                          p-5
                          hover:bg-white/[0.06]
                          transition-all
                          duration-300
                        "
                      >
                        <p className="text-white font-medium  text-sm  ">
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
          <div className="flex flex-col gap-4 ">
            {/* ABOUT */}
            <Cards
              id="card3"
              title="About"
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
              styles={`
                ${
                  expandedCard === "card3"
                    ? "h-[78vh] w-[90vw] absolute right-11  z-9 md:h-[80vh] md:w-auto  "
                    : expandedCard
                      ? "h-[70px] w-[70px]  md:h-[100px] md:w-[100px] opacity-30 scale-[0.97]"
                      : "h-[100px] items-center w-[100px]"
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
                        I build modern interfaces, AI-powered products, scalable
                        startup systems and immersive digital experiences with
                        strong focus on design systems and performance.
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
                          <p className="text-sm text-white">{item}</p>
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
                    ? "h-[78vh] w-[90vw] absolute right-11 bottom-7 z-9 md:h-[80vh] md:w-auto  "
                    : expandedCard
                      ? "h-[70px] w-[70px]  md:h-[100px] md:w-[100px] opacity-30 scale-[0.97]"
                      : "h-[100px] items-center w-[100px]"
                }
              `}
            >
              <div className="relative h-full">
                {/* glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full" />

                <div className="relative z-10 flex flex-col  gap-5 md:gap-8 h-full">
                  {/* header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h1 className="text-4xl md:text-5xl font-black text-white">
                          Contact
                        </h1>

                        <img
                          src="/devImg.jpg"
                          alt=""
                          className="w-10 h-10 rounded-2xl object-cover"
                          onClick={() => setShowAi(!showAi)}
                        />
                      </div>

                      <p className="text-neutral-400 mt-2 text-[0.6rem] md:text-sm max-w-[550px]">
                        Talk with my AI assistant or send a direct message for
                        projects, startups and collaborations.
                      </p>
                    </div>
                  </div>

                  {/* content */}
{showAi ? (
<div className="flex flex-col h-[300px] gap-3">

  {/* Messages */}
  <div className="flex-1 overflow-y-auto flex flex-col gap-2 pr-2 no-scrollbar">

    {messages.map((msg, i) => (
      <div
        key={i}
        className={`max-w-[80%] px-3 py-2 rounded-2xl text-[0.7rem] ${
          msg.role === "user"
            ? "ml-auto bg-white text-black"
            : "mr-auto bg-white/10 text-white"
        }`}
      >
        {msg.content}
      </div>
    ))}

    {loading && (
      <div className="mr-auto text-[0.65rem] text-white/60 animate-pulse">
        AI is thinking...
      </div>
    )}

    {/* 👇 scroll anchor */}
    <div ref={endRef} />
  </div>

  {/* Input */}
  <div className="flex gap-2 z-10 ">
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      placeholder="Ask something..."
      className="
      w-[30%]
        flex-1 h-10 text-[0.7rem]
        rounded-2xl bg-black/20 border border-white/10
        px-4 text-white outline-none
      "
    />

    <button
      onClick={sendMessage}
      className="
        h-10 px-4 rounded-2xl
        bg-gradient-to-r from-white to-neutral-300
        text-black font-bold text-[0.7rem]
        active:scale-95 transition
      "
    >
      Send
    </button>
  </div>

</div>
) : (<div className="flex flex-col gap-2 transition-all duration-400 ease "> <input type="text" placeholder="Your Name" className=" h-10 text-[0.6rem] rounded-2xl bg-black/20 border border-white/10 px-4 text-white outline-none " /> <input type="email" placeholder="Your Email" className=" h-10 text-[0.6rem] rounded-2xl bg-black/20 border border-white/10 px-4 text-white outline-none " /> <textarea rows={5} placeholder="Tell me about your project..." className=" rounded-2xl text-[0.6rem] bg-black/20 border border-white/10 p-3 text-white resize-none outline-none " /> <button className=" h-10 text-[0.7rem] rounded-2xl bg-gradient-to-r from-white to-neutral-300 text-black font-bold " > Send Message </button> </div>
)}
                </div>
              </div>
            </Cards>
          </div>
        </div>
      </main>
    </>
  );
}
