"use client";

import { ReactElement, useEffect } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout";

import { useUpdateUserMutation, ResumeInput } from "@/graphql/generated";
import { useState } from "react";
import { useAuth } from "@/_contexts/AuthContext";
import TestBubble from "@/components/TestBubble";
import UploadImg from "@/components/UploadImg";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const Page: NextPageWithLayout = () => {
  const { userdata } = useAuth();
  const [updateUserMutation, { loading }] = useUpdateUserMutation();
  const [inputData, setInputData] = useState<ResumeInput>({
    workExperiences: userdata?.tutorProfile?.resume?.workExperiences || "",
    education: userdata?.tutorProfile?.resume?.education || "",
    certificationUrls: userdata?.tutorProfile?.resume?.certificationUrls || [],
  });

  const handleData = (value: string, field: string) => {
    setInputData((prev) => ({ ...prev, [field]: value }));
  };

  async function handleSubmit() {
    console.log("inputData", inputData);
    try {
      const { data } = await updateUserMutation({
        variables: {
          userId: userdata?._id as string,
          input: {
            tutorProfile: {
              resume: inputData,
            },
          },
        },
      });
      if (data) toast("Амжилттай хадгалагдлаа!");
    } catch (error: any) {
      console.error("error updating resume: ", error);
      toast.error("Хадгалах үед алдаа гарлаа. Дахин оролдоно уу.");
    }
  }

  useEffect(() => {
    if (userdata?.tutorProfile?.resume) {
      setInputData({
        workExperiences: userdata.tutorProfile.resume.workExperiences || "",
        education: userdata.tutorProfile.resume.education || "",
        certificationUrls: userdata.tutorProfile.resume.certificationUrls || [],
      });
    }
  }, [userdata]);
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button size="sm" onClick={handleSubmit} disabled={loading} type="submit">
              Хадгалах
            </Button>
          </div>
        </div>
        {userdata?.tutorProfile && (
          <div className="flex flex-col gap-3">
            <TestBubble
              exampleContext="2016 — 2020 МУИС Хятад хэл шинжлэл"
              title="Боловсрол"
              handleData={handleData}
              field="education"
            />
            <TestBubble
              exampleContext="2020 — 2024 23-р сургууль Хятад хэлний багш"
              title="Ажлын туршлага"
              handleData={handleData}
              field="workExperiences"
            />
            <UploadImg setInputData={setInputData} />
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
