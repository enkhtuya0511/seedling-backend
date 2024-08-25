"use client";

import { useCourseQuery } from "@/graphql/generated";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
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
