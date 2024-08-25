import React, { ChangeEvent, useRef, useState } from "react";
import { storage } from "@/firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import toast from "react-hot-toast";
import Image from "next/image";
import { useAuth } from "@/_contexts/AuthContext";

type Props = {
  setInputData: (arg: any) => void;
};

const UploadImg = ({ setInputData }: Props) => {
  const { userdata } = useAuth();
  const fileRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<File | undefined>();
  const [uploadedImg1, setUploadedImg1] = useState<string[]>((userdata?.tutorProfile?.resume?.certificationUrls as string[]) || []);
  const [percentage, setPercentage] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadBu, setUploadBu] = useState<boolean>(true);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImg(event.target.files[0]);
      setUploadBu(false);
      console.log("setting img");
    }
  };

  const handleChooseFile = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const uploadFile = () => {
    setLoading(true);
    console.log("Handler is running");
    if (img) {
      const fileName = new Date().getTime() + "-" + img.name;
      const storageRef = ref(storage, `images/${fileName}`);

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPercentage(Math.ceil(progress));
        },
        (error) => {
          console.error("Upload failed", error);
          toast.error("Зураг байршуулахад алдаа гарлаа. Дахин оролдоно уу.");
          setLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setUploadedImg1((prev) => [...prev, downloadURL]);
            setInputData((prev: any) => ({ ...prev, certificationUrls: [...prev.certificationUrls, downloadURL] }));
            setUploadBu(true);
            setLoading(false);
          });
        }
      );
    }
  };

  function handleDelete(image: string) {
    setUploadedImg1((prev) => {
      return prev.filter((img) => img !== image);
    });
    setInputData((prev: any) => {
      let newCerti = prev.certificationUrls.filter((img: string) => img !== image);
      return { ...prev, certificationUrls: newCerti };
    });
  }
  return (
    <Card className="overflow-hidden w-[100%]">
      <CardHeader>
        <CardTitle>Гэрчилгээний Зургууд</CardTitle>
        <CardDescription>Гэрчилгээний Зургуудыг харсан сурагчид таны хичээлд элсэх магадлал нэмэгддэг.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/75 flex flex-col items-center justify-center text-4xl z-20">
              <p>Uploading..</p>
              <p>{percentage}%</p>
            </div>
          )}
          <div className="flex gap-3">
            {uploadedImg1.map((item, id) => (
              <div className="relative" key={id}>
                <Image src={item as string} alt="uploadedImg" width={100} height={75} className="w-auto h-auto" priority />
                <div className="absolute bg-purple-500 text-[#fff] p-1 top-0 right-0" onClick={() => handleDelete(item as string)}>
                  x
                </div>
              </div>
            ))}
            <div className="flex flex-col justify-between py-2">
              <div
                className="h-[100px] w-[100px] flex justify-center items-center outline-dashed rounded-sm outline-[gray]"
                onClick={handleChooseFile}
              >
                <Upload className="h-6 w-6 text-muted-foreground" />
                <span className="sr-only">Upload</span>
                <input type="file" onChange={handleFileChange} className="hidden" ref={fileRef} />
              </div>
              <Button onClick={uploadFile} disabled={uploadBu}>
                Upload
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadImg;
