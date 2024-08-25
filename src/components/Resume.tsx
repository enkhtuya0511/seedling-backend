import { useUpdateUserMutation, ResumeInput } from "@/graphql/generated";
import { useState } from "react";
import { useAuth } from "@/_contexts/AuthContext";
import TestBubble from "./TestBubble";
import UploadImg from "./UploadImg";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

const Resume = () => {
  const { userdata } = useAuth();
  const [updateUserMutation, { loading }] = useUpdateUserMutation();
  const [inputData, setInputData] = useState<ResumeInput>({
    workExperiences: userdata?.tutorProfile?.resume?.workExperiences,
    education: userdata?.tutorProfile?.resume?.education,
    certificationUrls: userdata?.tutorProfile?.resume?.certificationUrls,
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
      toast.error(error.message as string);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold leading-none tracking-tight">Update your resume 🌱</h1>
      {userdata?.tutorProfile?.resume && (
        <>
          <TestBubble
            exampleContext="2020 — 2024 23-р сургууль Хятад хэлний багш"
            title="Ажлын туршлага"
            handleData={handleData}
            field="workExperiences"
          />
          <TestBubble
            exampleContext="2016 — 2020 МУИС Хятад хэл шинжлэл"
            title="Боловсрол"
            handleData={handleData}
            field="education"
          />
          <UploadImg setInputData={setInputData} inputData={inputData} />
        </>
      )}
      <Button onClick={handleSubmit} disabled={loading}>
        Update Resume
      </Button>
    </div>
  );
};

export default Resume;
