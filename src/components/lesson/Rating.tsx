import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course } from "@/graphql/generated";

const Rating = ({ data }: { data: Course }) => {
  return (
    <Card x-chunk="dashboard-07-chunk-2">
      <CardHeader>
        <CardTitle>Үнэлгээ</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex p-4 items-center gap-6">
          <div className="flex flex-col items-center bg-slate-500 p-3">
            <h1 className="font-bold text-[30px]">4.2</h1>
            <p>★ ★ ★ ★ ☆</p>
            <p>Дундаж үнэлгээ</p>
          </div>
          <div>
            <div className="flex justify-between gap-3 items-center">
              <p>★ ★ ★ ★ ★</p> <p>5 од</p> <Progress value={100} className="w-[180px]" />
            </div>
            <div className="flex justify-between gap-3 items-center">
              <p>★ ★ ★ ★ ☆</p> <p>4 од</p> <Progress value={80} className="w-[180px]" />
            </div>
            <div className="flex justify-between gap-3 items-center">
              <p>★ ★ ★ ☆ ☆ </p> <p>3 од</p> <Progress value={60} className="w-[180px]" />
            </div>
            <div className="flex justify-between gap-3 items-center">
              <p>★ ★ ☆ ☆ ☆ </p> <p>2 од</p> <Progress value={40} className="w-[180px]" />
            </div>
            <div className="flex justify-between gap-3 items-center">
              <p>★ ☆ ☆ ☆ ☆</p> <p>1 од</p> <Progress value={20} className="w-[180px]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Rating;
