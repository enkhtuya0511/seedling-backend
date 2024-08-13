import React from "react";
import { Plus, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CreateCourseInput } from "@/pages/generated";
import { Input } from "./ui/input";
import Topic from "./Topic";

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
              <Topic handleData={handleData} />
            </div>
          </div>
          <div className="grid gap-3">
            <Label>Түвшин</Label>
            <div className="flex gap-2">
              {levels.map((level, id) => (
                <Button
                  key={id}
                  onClick={() => handlePress(level, "level")}
                  variant={newLesson?.level?.includes(level) ? "default" : "outline"}
                >
                  {level}
                </Button>
              ))}
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

const levels = ["Aнхан шат", "Дунд шат", "Aхисан шат"];
