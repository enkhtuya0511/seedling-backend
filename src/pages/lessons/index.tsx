"use client";

import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { useCoursesQuery } from "@/graphql/generated";
import Layout from "@/components/Layout";
import { LessonCard } from "@/components/Card";
import { useAuth } from "@/_contexts/AuthContext";

const Page: NextPageWithLayout = () => {
  const { userdata } = useAuth();
  const { data, loading } = useCoursesQuery();
  const courses = data?.courses?.filter((course) => course.tutorId._id === userdata?._id);
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Миний хичээлүүд</h1>
      {loading ? (
        <>loading...</>
      ) : (
        <div className="flex gap-3 flex-wrap">
          {courses?.map((course, id) => (
            <LessonCard key={id} data={course} />
          ))}
        </div>
      )}
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
