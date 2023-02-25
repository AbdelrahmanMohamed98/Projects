import React from "react";

const ChartsHeader = ({
  category,
  title,
  subject,
}) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p
        className="text-3xl font-extrabold tracking-tight text-slate-900
       ">
        {title}
      </p>
      <p class="text-center dark:text-gray-200 text-xl mb-2 mt-3">
        {subject}
      </p>
    </div>
  );
};

export default ChartsHeader;
