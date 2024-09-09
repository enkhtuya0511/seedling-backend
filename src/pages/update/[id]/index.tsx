"use client";

import { ReactElement, useEffect, useState } from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/Layout";
import { UpdateCourseInput, useCourseQuery, useUpdateCourseMutation } from "@/graphql/generated";
import { useRouter } from "next/router";
import LessonDetails from "@/components/update/LessonDetails";
import AvailableDays from "@/components/update/AvailableDays";
import CategoryAndPrice from "@/components/update/CategoryAndPrice";
import VideoLesson from "@/components/update/Video";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: course,
    loading,
    error,
  } = useCourseQuery({
    variables: {
      courseId: id as string,
    },
    skip: !id,
  });
  const [updateCourseMutation] = useUpdateCourseMutation();
  const [lessonData, setLessonData] = useState<UpdateCourseInput>({});

  const handleData = (value: string, field: string) => {
    setLessonData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePress = (label: string, field: keyof UpdateCourseInput) => {
    setLessonData((prev) => {
      const currentFieldArray = (prev[field] || []) as string[];
      if (currentFieldArray?.includes(label))
        return {
          ...prev,
          [field]: currentFieldArray.filter((item) => item !== label),
        };
      else return { ...prev, [field]: [...currentFieldArray, label] };
    });
  };

  async function handleSubmit() {
    console.log("lessonData", lessonData);
    try {
      const { data } = await updateCourseMutation({
        variables: {
          courseId: course?.course._id as string,
          input: lessonData,
        },
      });
      console.log("after req: ", data);
      toast.success("хичээл амжилттай шинэчлэгдлээ!");
    } catch (error) {
      console.log("error updating course: ", error);
    }
  }

  useEffect(() => {
    if (course?.course) {
      setLessonData({
        availableDays: course.course.availableDays,
        availableTimes: course.course.availableTimes,
        categoryId: course.course.categoryId,
        description: course.course.description,
        enrolledStudentIds: course.course.enrolledStudentIds,
        level: course.course.level,
        price: course.course.price,
        requestedStudentIds: course.course.requestedStudentIds,
        reviewIds: course.course.reviewIds,
        subject: course.course.subject,
        videoLesson: course.course.videoLesson,
      } as UpdateCourseInput);
    }
  }, [course]);

  if (loading) return <p>Ачаалж байна...</p>;
  if (error || !course?.course) return <p>Өгөгдсөн ID-тай хичээл олдсонгүй.</p>;
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button size="sm" onClick={handleSubmit} disabled={loading} type="submit">
              Шинэчлэх
            </Button>
          </div>
        </div>
        {course?.course && (
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <LessonDetails lesson={lessonData} handleData={handleData} handlePress={handlePress} />
              <AvailableDays lesson={lessonData} handlePress={handlePress} />
            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <CategoryAndPrice lesson={lessonData} handleData={handleData} />
              <VideoLesson lesson={lessonData} handleData={handleData} />
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
