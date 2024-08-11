import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import Layout from "./layout";
import type { NextPageWithLayout } from "../_app";

const Login: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 bg-white rounded-lg shadow-md min-w-80">
        <Link href={"/"} className="flex justify-center mb-4">
          <Image src={"/vercel.svg"} width={40} height={40} alt="logo" />
        </Link>
        <h1 className="text-2xl font-bold text-center mb-4">Log in to Tutor Dashboard</h1>
      </div>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Login;
