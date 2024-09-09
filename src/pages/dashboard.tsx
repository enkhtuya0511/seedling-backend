import { ReactElement, useEffect, useState } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout";
import { useAuth } from "@/_contexts/AuthContext";
import { useCoursesQuery } from "@/graphql/generated";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Reviews from "@/components/Reviews";
import { Users, BookCopy } from "lucide-react";

const Dashboard: NextPageWithLayout = () => {
  const { userdata } = useAuth();
  const [courseId, setCourseId] = useState<string | null>(userdata?.tutorProfile?.courseIds?.[0] || null);
  const { data: courses, loading } = useCoursesQuery();

  useEffect(() => {
    if ((userdata?.tutorProfile?.courseIds?.length as number) > 0) {
      setCourseId(userdata?.tutorProfile?.courseIds?.[0] as string);
    }
  }, [userdata?.tutorProfile?.courseIds]);

  const filteredCourses = courses?.courses?.filter((course) => course.tutorId._id === userdata?._id);
  const totalEnrolledStudents = filteredCourses?.reduce((sum, course) => sum + (course?.enrolledStudentIds?.length || 0), 0);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {loading ? (
          <>
            <Skeleton className="h-[125px] w-[220px] rounded-xl" />
            <Skeleton className="h-[125px] w-[220px] rounded-xl" />
          </>
        ) : (
          <>
            <Card x-chunk="dashboard-01-chunk-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium">Нийт Хичээлүүд</CardTitle>
                <BookCopy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{filteredCourses?.length || 0}</div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-0">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium">Нийт Сурагчид</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalEnrolledStudents || 0}</div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
      <Reviews courseId={courseId} setCourseId={setCourseId} />
    </main>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
