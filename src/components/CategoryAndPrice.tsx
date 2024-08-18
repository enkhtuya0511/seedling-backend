import Topic from "./Topic";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  handleData: (arg: string, field: string) => void;
};

const CategoryAndPrice = ({ handleData }: Props) => {
  return (
    <Card x-chunk="dashboard-07-chunk-3">
      <CardHeader>
        <CardTitle>🌱</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label>Чиглэл</Label>
            <div className="flex gap-2">
              <Topic handleData={handleData} />
            </div>
          </div>
          <div className="grid gap-3">
            <Label>Үнэ /50-минут бүр/</Label>
            <Input placeholder="10000₮" onChange={(e) => handleData(e.target.value, "price")} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryAndPrice;
