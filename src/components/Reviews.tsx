import { useEffect } from "react";
import { useAuth } from "@/_contexts/AuthContext";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useReviewsQuery } from "@/graphql/generated";
import { calculateOverallRating, reviewStatistics } from "@/utils/services";

type Props = {
  courseId: string | null;
  setCourseId: (arg: string) => void;
};

const Reviews = ({ courseId, setCourseId }: Props) => {
  const { userdata } = useAuth();
  const { data, loading, error, refetch } = useReviewsQuery({
    variables: {
      courseId: courseId || "",
    },
    skip: !courseId,
  });
  const overallRating = calculateOverallRating(data?.reviews);
  const result = reviewStatistics(data?.reviews);

  useEffect(() => {
    if (courseId) {
      refetch({
        courseId,
      });
    }
  }, [courseId, refetch]);

  if (loading) return <p>Ачаалж байна...</p>;
  return (
    <div className="flex flex-col gap-2">
      {data?.reviews ? (
        <>
          <Select onValueChange={(val) => setCourseId(val)} defaultValue={courseId as string}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Хичээл сонгох" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Хичээлүүд</SelectLabel>
                {userdata?.tutorProfile?.courseIds?.map((item) => (
                  <SelectItem value={item as string} key={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="flex p-4 items-center gap-10">
            <div className="flex flex-col items-center bg-slate-500 p-3">
              <h1 className="font-bold text-[30px]">{overallRating.toFixed(1) || 0}</h1>
              <p>★ ★ ★ ★ ☆</p>
              <p>Дундаж үнэлгээ</p>
            </div>

            <div>
              <div className="flex justify-between gap-3 items-center">
                <p>★ ★ ★ ★ ★</p> <p>5 од</p> <Progress value={result[5].percentage} className="w-[260px]" />
              </div>
              <div className="flex justify-between gap-3 items-center">
                <p>★ ★ ★ ★ ☆</p> <p>4 од</p> <Progress value={result[4].percentage} className="w-[260px]" />
              </div>
              <div className="flex justify-between gap-3 items-center">
                <p>★ ★ ★ ☆ ☆</p> <p>3 од</p> <Progress value={result[3].percentage} className="w-[260px]" />
              </div>
              <div className="flex justify-between gap-3 items-center">
                <p>★ ★ ☆ ☆ ☆</p> <p>2 од</p> <Progress value={result[2].percentage} className="w-[260px]" />
              </div>
              <div className="flex justify-between gap-3 items-center">
                <p>★ ☆ ☆ ☆ ☆</p> <p>1 од</p> <Progress value={result[1].percentage} className="w-[260px]" />
              </div>
            </div>
          </div>

          <Card x-chunk="dashboard-01-chunk-4">
            <CardHeader>
              <CardTitle>Үнэлгээнүүд</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              {data?.reviews?.map((review) => (
                <div className="flex items-center gap-5" key={review._id}>
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    {review.studentId.profilePic && <AvatarImage src={review.studentId.profilePic} alt="Avatar" />}
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">{review.studentId.fullName}</p>
                    <p className="text-sm text-muted-foreground">{review.studentId.email}</p>
                  </div>
                  <div className="ml-auto text-muted-foreground">{review.comment}</div>
                  <div className="ml-auto font-bold">{review.rating}★</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </>
      ) : (
        <>Одоогоор үнэлгээ байхгүй байна.</>
      )}
    </div>
  );
};

export default Reviews;
