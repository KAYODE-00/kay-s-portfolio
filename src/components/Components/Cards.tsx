"use client";

import React from "react";

type CardProps = {
  id: string;
  title: string;
  styles: string;

  expandedCard: string | null;

  setExpandedCard: React.Dispatch<
    React.SetStateAction<string | null>
  >;
};

function Cards({
  id,
  title,
  styles,
  expandedCard,
  setExpandedCard,
}: CardProps) {

  const isExpanded = expandedCard === id;

  const handleClick = () => {

    if (isExpanded) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        ${
          isExpanded
            ? ""
            : ""
        }

        ${styles}

        duration-300
        overflow-hidden
        rounded-lg
        border
        border-neutral-700/50
        cursor-pointer
      `}
    >
      {title}
    </div>
  );
}

export default Cards;