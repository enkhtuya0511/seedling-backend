import React from "react";
import { Plus, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CreateCourseInput } from "@/pages/generated";

type Props = {
  handleData: (arg: string, field: string) => void;
  handlePress: (arg: string, field: keyof CreateCourseInput) => void;
  newLesson: CreateCourseInput;
};

const LessonDetails = ({ handleData, handlePress, newLesson }: Props) => {
  return (
    <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        <CardTitle>Хичээлийн Дэлгэрэнгүй</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label>Чиглэл</Label>
            <div className="flex gap-2">
              <div>
                <div className="flex justify-between items-center p-2 border rounded gap-1">
                  <h1>Хар зураг</h1>{" "}
                  <button className="hover:text-gray-400">
                    <X />
                  </button>
                </div>
              </div>
              <Button>
                <Plus />
              </Button>
            </div>
          </div>
          <div className="grid gap-3">
            <Label>Түвшин</Label>
            <div className="flex gap-2">
              <Button
                onClick={() => handlePress("Aнхан шат", "level")}
                variant={newLesson?.level?.includes("Aнхан шат") ? "default" : "outline"}
              >
                анхан шат
              </Button>
              <Button
                onClick={() => handlePress("Дунд шат", "level")}
                variant={newLesson?.level?.includes("Дунд шат") ? "default" : "outline"}
              >
                дунд шат
              </Button>
              <Button
                onClick={() => handlePress("Aхисан шат", "level")}
                variant={newLesson?.level?.includes("Aхисан шат") ? "default" : "outline"}
              >
                Aхисан шат
              </Button>
            </div>
          </div>
          <div className="grid gap-3">
            <Label>Хичээлийн Тодорхойлолт</Label>
            <Textarea
              id="description"
              defaultValue="График дизайны үндэс, хэрэгслүүд, арга техникүүд болон бүтээлч процессуудыг суралцах..."
              className="min-h-32"
              onChange={(e) => handleData(e.target.value, "description")}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LessonDetails;
