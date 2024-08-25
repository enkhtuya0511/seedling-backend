import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course } from "@/graphql/generated";

const AvailableDays = ({ data }: { data: Course }) => {
  return (
    <Card x-chunk="dashboard-07-chunk-2">
      <CardHeader>
        <CardTitle>Хичээлийн хуваарь</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label>Хичээл заах боломжтой өдрүүд</Label>
            <div className="flex flex-wrap gap-2">
              {data?.availableDays?.map((item, id) => (
                <Button key={id} variant="default">
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Хичээл заах боломжтой цагууд</Label>
            <div className="flex flex-wrap gap-2">
              {data?.availableTimes?.map((item, id) => (
                <Button key={id} variant="default">
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

export default AvailableDays;
