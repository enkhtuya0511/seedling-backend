"use client";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { useCoursesQuery } from "./generated";
import Layout from "./login/layout";

const Page: NextPageWithLayout = () => {
  const { data, loading, error } = useCoursesQuery();
  console.log("data", data);
  return (
    <div>
      <p>Courses page</p>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
