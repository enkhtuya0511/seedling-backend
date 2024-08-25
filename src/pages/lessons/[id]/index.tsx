"use client";

import { ReactElement } from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/Layout";
import { useCourseQuery } from "@/graphql/generated";
import { useRouter } from "next/router";

import LevelAndDesc from "@/components/lesson/LevelAndDesc";
import AvailableDays from "@/components/lesson/AvailableDays";
import Rating from "@/components/lesson/Rating";
import SubjectAndCate from "@/components/lesson/SubjectAndCate";
import PriceAndStudents from "@/components/lesson/PriceAndStudents";
import Video from "@/components/lesson/Video";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useCourseQuery({
    variables: {
      courseId: id as string,
    },
    skip: !id,
  });

  if (loading) return <p>Ачаалж байна...</p>;
  if (error || !data?.course) return <p>Өгөгдсөн ID-тай хичээл олдсонгүй.</p>;
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        {data?.course && (
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <LevelAndDesc data={data.course} />
              <AvailableDays data={data.course} />
              {data.course.reviewIds?.length || (0 > 0 && <Rating data={data.course} />)}
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <SubjectAndCate data={data?.course} />
              <PriceAndStudents data={data?.course} />
              <Video data={data?.course} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
