"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";

const Tiptap = ({ onChange, content }: any) => {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none prose",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full px-4">
      <ToolBar editor={editor} content={content} />
      <EditorContent editor={editor} />
      <div
        className="ProseMirror whitespace-pre-line border border-slate-700 px-6 py-4 rounded-lg"
        style={{ whiteSpace: "pre-line" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Tiptap;
