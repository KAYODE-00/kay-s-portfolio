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

  // ONLY EXPAND
  const handleClick = () => {

    if (!isExpanded) {
      setExpandedCard(id);
    }
  };

  // CLOSE BUTTON
  const handleClose = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {

    e.stopPropagation();

    setExpandedCard(null);
  };

  return (
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

        ${styles}
      `}
    >

      {/* CLOSE BUTTON */}
      {isExpanded && (
        <button
          onClick={handleClose}
          className="
            absolute
            top-4
            right-4
            z-50
            w-10
            h-10
            rounded-full
            bg-white/10
            hover:bg-white/20
            transition-all
          "
        >
          ✕
        </button>
      )}

      {/* CARD TITLE */}
      {!isExpanded && (
        <div className="p-4 font-medium">
          {title}
        </div>
      )}

      {/* EXPANDED CONTENT */}
      {isExpanded && (
        <div className="w-full h-full p-5">
          {children}
        </div>
      )}

    </div>
  );
}

export default Cards;