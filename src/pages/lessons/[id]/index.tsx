"use client";

import { useCourseQuery } from "@/graphql/generated";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useCourseQuery({
    variables: {
      courseId: id as string,
    },
    skip: !id,
  });
  console.log("data", data);
  return <>lesson id: {id}</>;
};

export default Page;
