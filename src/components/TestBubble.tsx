import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";

const TestBubble = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    content: `
          <p>
            Hey, try to select some text here. There will popup a menu for selecting some inline styles. Remember: you have full control about content and styling of this menu.
          </p>
        `,
  });

  const [isEditable, setIsEditable] = React.useState(true);

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);
  return (
    <>
      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={isEditable}
            onChange={() => setIsEditable(!isEditable)}
          />
          Editable
        </label>
      </div>

      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bg-[white] border-gray-400 rounded-[11px] shadow-lg flex p-[3px] border-[1px] gap-1">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`${editor.isActive("bold") ? "bg-purple-600" : ""} bg-[white] rounded-[11px] p-[3px] hover:bg-gray-500 text-[#000000]`}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`${editor.isActive("italic") ? "bg-purple-600" : ""} bg-[white] rounded-[11px] p-[3px] hover:bg-gray-500 text-[#000000]`}
            >
              Italic
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`${editor.isActive("strike") ? "bg-purple-600" : ""} bg-[white] rounded-[11px] p-[3px] hover:bg-gray-500 text-[#000000]`}
            >
              Strike
            </button>
          </div>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </>
  );
};

export default TestBubble;
//"bg-[white] border-gray-400 rounded-[11px] shadow-lg flex p-[3px] border-[1px] hover:bg-gray-500"