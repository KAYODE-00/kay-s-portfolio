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

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setExpandedCard(null);
  };

  return (
    <>
      {/* CARD */}
      <div
        onClick={handleClick}
        className={`
          relative
          overflow-hidden
          rounded-3xl
          border
          border-neutral-700/50
          backdrop-blur-sm
          cursor-pointer
          transition-all
          duration-500

          ${styles}
        `}
      >
        {!isExpanded && (
          <div className="p-4 font-medium">
            {title}
          </div>
        )}

        {isExpanded && (
          <div className="w-full h-full overflow-y-auto p-5 hide-scrollbar">
            {children}
          </div>
        )}
      </div>

      {/* MODAL CLOSE BUTTON (TRUE FIXED LAYER) */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <button
            onClick={handleClose}
            className="
              pointer-events-auto
              absolute
              top-6
              right-6
              w-10 h-10
              rounded-full
              bg-white/10
              hover:bg-white/20
              transition-all
              backdrop-blur-md
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