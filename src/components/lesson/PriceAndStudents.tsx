import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course } from "@/graphql/generated";
import { HandCoins, Users } from "lucide-react";

const PriceAndStudents = ({ data }: { data: Course }) => {
  return (
    <>
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-sm font-medium">Нийт Сурагчид</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data?.enrolledStudentIds?.length}</div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-sm font-medium">Үнэ /50-минут бүр/</CardTitle>
          <HandCoins className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data?.price}₮</div>
        </CardContent>
      </Card>
    </>
  );
};

export default PriceAndStudents;
