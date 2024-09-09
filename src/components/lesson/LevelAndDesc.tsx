import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course } from "@/graphql/generated";

const LevelAndDesc = ({ data }: { data: Course }) => {
  return (
    <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        <CardTitle>Хичээлийн Дэлгэрэнгүй</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label>Түвшин</Label>
            <div className="flex gap-2">
              {data.level?.map((level, id) => (
                <Button key={id} variant="outline">
                  {level}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <Label>Хичээлийн Тодорхойлолт</Label>
            <Textarea id="description" defaultValue={data.description} className="min-h-32" disabled />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LevelAndDesc;
