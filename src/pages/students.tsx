"use client";

import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout";

const Page: NextPageWithLayout = () => {
  return <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">my students</main>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
