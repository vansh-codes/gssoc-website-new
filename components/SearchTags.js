import React, { useState } from "react";
import { projectTags } from "../pages/api/projectTags";

export default function SearchTags({ setSearchTerm }) {
  const [selected, isSelected] = useState(-1);

  return (
    <div className="flex flex-wrap  sm:gap-5 gap-2 justify-center md:w-[50%] sm:w-[70%] w-[90%] mx-auto dark:text-white text-black">
      {projectTags.map((tags, idx) => {
        if (idx < 15) {
          return (
            <div
              className={`border border-code_of_conduct-1 px-3 py-2 cursor-pointer sm:text-[15px] text-[10px] ${
                idx === selected ? "bg-code_of_conduct-1" : ""
              }`}
              key={tags.title}
              onClick={() => {
                setSearchTerm(tags.title);
                isSelected(idx);
              }}
            >
              {tags.title}
            </div>
          );
        }
      })}
    </div>
  );
}
