import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "./login/layout";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <p>Create Course page</p>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
