import React from "react";
export default function CommentAddComponent({ props }: any) {
  return (
    <>
      <div className="flex flex-row gap-2 mb-4 p-4">
        <div>
          <a>متن </a>
        </div>
        <textarea
          className="w-9/12 border p-2 border-gray-300 outline-none"
          name=""
          id=""
          cols={35}
          rows={3}
        ></textarea>
        <button className="px-2 bg-slate-300 hover:bg-[#80BB01] w-2/12 h-fit">
          ارسال
        </button>
      </div>
    </>
  );
}
