"use client";

import { ReactElement, useState } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "./login/layout";
import { Button } from "@/components/ui/button";
import LessonDetails from "@/components/LessonDetails";
import AvailableTimes from "@/components/AvailableTimes";
import VideoLesson from "@/components/VideoLesson";
import CategoryAndPrice from "@/components/CategoryAndPrice";
import { CreateCourseInput } from "./generated";

const Page: NextPageWithLayout = () => {
  const [newLesson, setNewLesson] = useState({} as CreateCourseInput);

  const handleData = (value: string, field: string) => {
    setNewLesson((prev) => ({ ...prev, [field]: value }));
  };

  const handlePress = (label: string, field: keyof CreateCourseInput) => {
    setNewLesson((prev) => {
      const currentFieldArray = (prev[field] || []) as string[];
      if (currentFieldArray?.includes(label))
        return {
          ...prev,
          [field]: currentFieldArray.filter((item) => item !== label),
        };
      else return { ...prev, [field]: [...currentFieldArray, label] };
    });
  };

  // console.log("newLesson", newLesson);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              Устгах
            </Button>
            <Button size="sm">Хадгалах</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <LessonDetails handleData={handleData} handlePress={handlePress} newLesson={newLesson} />
            <AvailableTimes handlePress={handlePress} newLesson={newLesson} />
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <CategoryAndPrice handleData={handleData} />
            <VideoLesson />
          </div>
        </div>
      </div>
    </main>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
