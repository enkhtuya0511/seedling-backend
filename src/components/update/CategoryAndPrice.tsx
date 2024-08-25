import Topic from "../Topic";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course, UpdateCourseInput } from "@/graphql/generated";

type Props = {
  handleData: (arg: string, field: keyof UpdateCourseInput) => void;
  lesson: UpdateCourseInput;
};

const CategoryAndPrice = ({ handleData, lesson }: Props) => {
  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader>
        <CardTitle>🌱</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label>Чиглэл</Label>
            <div className="flex gap-2">
              <Topic handleData={handleData} newLesson={lesson} />
            </div>
          </div>
          <div className="grid gap-3">
            <Label>Үнэ /50-минут бүр/</Label>
            <Input placeholder="10000₮" onChange={(e) => handleData(e.target.value, "price")} defaultValue={lesson.price as string} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryAndPrice;
