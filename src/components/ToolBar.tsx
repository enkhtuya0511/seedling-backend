"use client";

import React from "react";
import { type Editor } from "@tiptap/react";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="bg-[white] border-gray-400 rounded-[11px] shadow-lg flex p-[3px] border-[1px] gap-1">
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        className={`${
          editor.isActive("bold") ? "bg-pink-400" : ""
        } bg-[white] rounded-[11px] p-[3px] hover:bg-gray-500 text-[#000000]`}
      >
        Bold
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        className={`${
          editor.isActive("italic") ? "bg-pink-400" : ""
        } bg-[white] rounded-[11px] p-[3px] hover:bg-gray-500 text-[#000000]`}
      >
        Italic
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        className={`${
          editor.isActive("strike") ? "bg-pink-400" : ""
        } bg-[white] rounded-[11px] p-[3px] hover:bg-gray-500 text-[#000000]`}
      >
        Strike
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        className={`${
          editor.isActive("orderedList") ? "bg-pink-400" : ""
        } bg-[white] rounded-[11px] p-[3px] hover:bg-gray-500 text-[#000000]`}
      >
        Order List
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        className={`${
          editor.isActive("bulletList") ? "bg-pink-400" : ""
        } bg-[white] rounded-[11px] p-[3px] hover:bg-gray-500 text-[#000000]`}
      >
        Bullet List
      </button>
    </div>
  );
};

export default Toolbar;
