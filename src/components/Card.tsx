import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, User, UserRoundPen, Trash2, Ellipsis, BookOpenCheck } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Course } from "@/graphql/generated";
import { useRouter } from "next/navigation";

export function LessonCard({ data }: { data: Course | null }) {
  const { push } = useRouter();
  return (
    <Card className="w-[310px] shadow-md rounded-lg border overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">{data?.subject}</CardTitle>
        <CardDescription className="mt-2 line-clamp-3">{data?.description}</CardDescription>
      </CardHeader>
      <CardContent className="border-t p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400" /> <span>5</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="text-blue-500" /> <span>{data?.enrolledStudentIds?.length} students</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t p-4">
        <h1 className="text-md">{data?.price}₮</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Ellipsis className="hover:text-sky-300 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[150px]">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => push(`/lessons/${data?._id}`)}>
                <BookOpenCheck className="mr-2 h-4 w-4" />
                <span>мэдээлэл үзэх</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => push(`/update/${data?._id}`)}>
                <UserRoundPen className="mr-2 h-4 w-4" />
                <span>шинэчлэх</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("delete lesson id: ", data?._id)}>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>устгах</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
}
