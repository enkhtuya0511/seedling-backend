import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { storage } from "@/firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import toast from "react-hot-toast";
import { UpdateCourseInput } from "@/graphql/generated";

type Props = {
  handleData: (arg: string, field: string) => void;
  lesson: UpdateCourseInput;
};

const VideoLesson = ({ lesson, handleData }: Props) => {
  const [video, setVideo] = useState<File | undefined>();
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(lesson.videoLesson as string);
  const [percentage, setPercentage] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadBu, setUploadBu] = useState<boolean>(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setVideo(event.target.files[0]);
      setUploadBu(true);
      console.log("setting video");
    }
  };

  const handleChooseFile = () => {
    if (fileRef.current) {
      setUploadedVideo(null);
      fileRef.current.click();
    }
  };

  const uploadFile = () => {
    setLoading(true);
    console.log("Handler is running");
    if (video) {
      const fileName = new Date().getTime() + "-" + video.name;
      const storageRef = ref(storage, `videos/${fileName}`);

      const uploadTask = uploadBytesResumable(storageRef, video);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          const roundedProcess = Math.ceil(progress);
          console.log(`Upload is ${progress}% done`);
          setPercentage(roundedProcess);
        },
        (error) => {
          console.error("Upload failed", error);
          toast.error("Видео байршуулахад алдаа гарлаа. Дахин оролдоно уу.");
          setLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setUploadedVideo(downloadURL);
            handleData(downloadURL, "videoLesson");
            setUploadBu(false);
            setLoading(false);
          });
        }
      );
    }
  };

  useEffect(() => {
    setUploadedVideo(lesson.videoLesson as string);
  }, [lesson.videoLesson]);
  return (
    <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <CardTitle>Видео Хичээл</CardTitle>
        <CardDescription>Видео Хичээлийг үзсэн сурагчид таны хичээлд элсэх магадлал 5 дахин нэмэгддэг.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/75 flex flex-col items-center justify-center text-4xl z-20">
              <p>Uploading..</p>
              <p>{percentage}%</p>
            </div>
          )}
          {uploadedVideo && (
            <video className="w-full h-auto max-w-full" controls>
              <source src={uploadedVideo} type="video/mp4" />
            </video>
          )}

          <div className="grid grid-cols-3 gap-2" onClick={handleChooseFile}>
            <Upload className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">Upload</span>
            <input type="file" accept="video/*" onChange={handleFileChange} className="hidden" ref={fileRef} />
          </div>
          <Button onClick={uploadFile} disabled={!uploadBu}>
            Upload
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoLesson;
