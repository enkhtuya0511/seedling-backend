import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
            <Label>Ангилал</Label>
            <Select onValueChange={(val) => handleData(val, "categoryId")}>
              <SelectTrigger id="category" aria-label="Select status">
                <SelectValue placeholder="Ангилалаа сонгох" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Active</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
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
