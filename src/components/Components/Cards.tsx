"use client";

import React from "react";

type CardProps = {
  id: string;
  title: string;
  styles: string;
  children?: React.ReactNode;
  expandedCard: string | null;
  setExpandedCard: React.Dispatch<
    React.SetStateAction<string | null>
  >;
};

function Cards({
  id,
  title,
  styles,
  children,
  expandedCard,
  setExpandedCard,
}: CardProps) {
  const isExpanded = expandedCard === id;

  const handleClick = () => {
    if (!isExpanded) {
      setExpandedCard(id);
    }
  };

  const handleClose = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    setExpandedCard(null);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-white/10
          bg-[#1B211A]/40
          backdrop-blur-3xl
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          cursor-pointer
          transition-all
          duration-500
          hover:border-white/20

          ${styles}
        `}
      >
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.03),transparent)] pointer-events-none" />

        {/* glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-400/5 blur-3xl rounded-full" />

        {!isExpanded && (
          <div className="relative z-10 h-full flex items-end p-6">
            <h1 className="text-2xl md:text-3xl font-black text-white">
              {title}
            </h1>
          </div>
        )}

        {isExpanded && (
          <div className="relative z-10 w-full h-full overflow-y-auto p-5 md:p-7 no-scrollbar">
            {children}
          </div>
        )}
      </div>

      {/* CLOSE */}
      {isExpanded && (
        <div className="fixed inset-0 z-[999] pointer-events-none">
          <button
            onClick={handleClose}
            className="
              pointer-events-auto
              absolute
              top-5
              right-5
              md:top-8
              md:right-8
              w-12
              h-12
              rounded-full
              border
              border-white/10
              bg-white/10
              backdrop-blur-xl
              text-white
              text-xl
              hover:bg-white/20
              hover:rotate-90
              transition-all
              duration-300
            "
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

export default Cards;