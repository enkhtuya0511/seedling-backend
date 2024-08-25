import React, { useEffect } from "react";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ResumeInput } from "@/graphql/generated";
import { useAuth } from "@/_contexts/AuthContext";
import Toolbar from "./ToolBar";

type Props = {
  title: string;
  exampleContext: string;
  handleData: (value: string, field: string) => void;
  field: keyof ResumeInput;
};

const TestBubble = ({ title, exampleContext, handleData, field }: Props) => {
  const { userdata } = useAuth();
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    onUpdate: ({ editor }) => handleData(editor.getHTML(), field),
    content: userdata?.tutorProfile?.resume?.[field] as string,
  });
  const [isEditable, setIsEditable] = React.useState(true);

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md mx-auto w-full">
      <div className="control-group flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xl">{title}</h3>
          <label className="flex items-center gap-2 text-sm text-gray-500">
            <input
              type="checkbox"
              checked={isEditable}
              onChange={() => setIsEditable(!isEditable)}
              className="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
            />
            Editable
          </label>
        </div>
      </div>
      <p className="font-bold text-base">Жишээ: {exampleContext}</p>
      <div className="tippy-wrapper relative">
        {editor && (
          <BubbleMenu editor={editor} tippyOptions={{ duration: 100, interactive: true }}>
            <Toolbar editor={editor} />
          </BubbleMenu>
        )}
        <EditorContent editor={editor} className="border-2 border-pink-400 rounded-lg" />
      </div>
    </div>
  );
};

export default TestBubble;
//dangerouslySetInnerHTML={{ __html: content }}
