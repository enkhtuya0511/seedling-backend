import { CreateCourseInput } from "@/graphql/generated";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  handlePress: (arg: string, field: keyof CreateCourseInput) => void;
  newLesson: CreateCourseInput;
};

const AvailableTimes = ({ handlePress, newLesson }: Props) => {
  return (
    <Card x-chunk="dashboard-07-chunk-2">
      <CardHeader>
        <CardTitle>Хичээлийн хуваарь</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 flex-col">
          <div className="grid gap-2">
            <Label>Хичээл заах боломжтой өдрүүд</Label>
            <div className="flex flex-wrap gap-2">
              {days.map((item, id) => (
                <Button
                  key={id}
                  variant={newLesson?.availableDays?.includes(item) ? "default" : "outline"}
                  onClick={() => handlePress(item, "availableDays")}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Хичээл заах боломжтой цагууд</Label>
            <div className="flex flex-wrap gap-2">
              {times.map((item, id) => (
                <Button
                  key={id}
                  variant={newLesson?.availableTimes?.includes(item) ? "default" : "outline"}
                  onClick={() => handlePress(item, "availableTimes")}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AvailableTimes;

const days = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"];
const times = ["Өглөө /6:00-10:00/", "Үдээс өмнө /10:00-14:00/", "Үдээс хойш /14:00-18:00/", "Орой /18:00-21:00/"];
