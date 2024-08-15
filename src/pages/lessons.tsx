"use client";

import { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "./_app";
import { useCoursesQuery } from "@/graphql/generated";
import Layout from "@/components/Layout";
import Tiptap from "@/components/Tiptap";

const Page: NextPageWithLayout = () => {
  const { data } = useCoursesQuery();
  // console.log("data", data);

  const [content, setContent] = useState<string>("");
  const handleContentChange = (text: any) => {
    setContent(text);
  };
  return (
    <div>
      <p>Courses page</p>
      <form className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10">
        <Tiptap content={content} onChange={(newContent: string) => handleContentChange(newContent)} />
      </form>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
