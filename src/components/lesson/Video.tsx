import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course } from "@/graphql/generated";

const Video = ({ data }: { data: Course }) => {
  return (
    <>
      {data?.videoLesson && (
        <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
          <CardHeader>
            <CardTitle>Видео Хичээл</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <video className="w-full h-auto max-w-full" controls>
                <source src={data?.videoLesson} type="video/mp4" />
              </video>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Video;
