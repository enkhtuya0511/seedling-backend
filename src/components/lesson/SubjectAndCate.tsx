import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course, useCategoryQuery } from "@/graphql/generated";

const SubjectAndCate = ({ data }: { data: Course }) => {
  const { data: category } = useCategoryQuery({
    variables: {
      categoryId: data.categoryId,
    },
  });
  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader>
        <CardTitle>🌱</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="category">Ангилал</Label>
            <h1>{category?.category.name}</h1>
          </div>
          <div className="grid gap-3">
            <Label>Чиглэл</Label>
            <h1>{data?.subject}</h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectAndCate;
