import React from "react";
import Image from "next/image";
import { Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const VideoLesson = () => {
  return (
    <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
      <CardHeader>
        <CardTitle>Видео Хичээл</CardTitle>
        <CardDescription>Видео Хичээлийг үзсэн сурагчид таны хичээлд элсэх магадлал 5 дахин нэмэгддэг.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover border"
            height="300"
            src="/clouds>_^.png"
            width="300"
            priority
          />
          <div className="grid grid-cols-3 gap-2">
            <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Upload</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoLesson;
