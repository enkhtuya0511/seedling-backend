import { useCoursesQuery } from "@/graphql/generated";
import Tiptap from "./Tiptap";
import { useState } from "react";

export const Resume = () => {
  const [content, setContent] = useState<string>("");

  const handleContentChange = (text: any) => {
    setContent(text);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("content: ", content);
  };
  return (
    <div>
      <form
        className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
        onSubmit={handleSubmit}
      >
        <Tiptap
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </form>
    </div>
  );
};
