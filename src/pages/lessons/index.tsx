"use client";

import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { Course, useCoursesByUserQuery } from "@/graphql/generated";
import Layout from "@/components/Layout";
import { LessonCard } from "@/components/Card";
import { useAuth } from "@/_contexts/AuthContext";

const Page: NextPageWithLayout = () => {
  const { userdata } = useAuth();
  const { data, loading } = useCoursesByUserQuery({
    variables: {
      userId: userdata?._id as string,
    },
    skip: !userdata?._id,
  });

  if (loading) return <p>Ачаалж байна...</p>;
  if (!data?.coursesByUser) return <p>Хичээл олдсонгүй.</p>;
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Миний хичээлүүд</h1>
      <div className="flex gap-3 flex-wrap">
        {data?.coursesByUser?.map((course, id) => (
          <LessonCard key={id} data={course as Course} />
        ))}
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
