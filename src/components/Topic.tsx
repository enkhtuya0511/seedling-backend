"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "./ui/input";

type Props = {
  handleData: (arg: string, field: string) => void;
};

const Topic = ({ handleData }: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [topic, setTopic] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);

  const AddTopic = (topic: string) => {
    console.log("new topic: ", topic);
    // setCategories([...categories, category]);
    topics.push(topic);
    setShow(false);
    setTopic("");
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? topics.find((topic) => topic === value) : "Чиглэлээ сонгох..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Чиглэлээ сонгох..." />
          <CommandList>
            <CommandEmpty>Чиглэл олдсонгүй...</CommandEmpty>
            <CommandGroup>
              {topics.map((topic) => (
                <CommandItem
                  key={topic}
                  value={topic}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    console.log("first", currentValue);
                    handleData(currentValue, "topic");
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === topic ? "opacity-100" : "opacity-0")} />
                  {topic}
                </CommandItem>
              ))}
              <CommandItem>
                {show ? (
                  <div className="flex gap-[5px]">
                    <Input placeholder="Чиглэл нэмэх..." onChange={(e) => setTopic(e.target.value)} />
                    <Button onClick={() => AddTopic(topic)}>Нэмэх</Button>
                  </div>
                ) : (
                  <Button onClick={() => setShow(true)}>Чиглэл нэмэх</Button>
                )}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Topic;

const topics = ["Гитар", "Хийл", "Хар зураг", "График дизайн"];

{
  /* <Select value={input?.subject as string} onValueChange={(val) => setInput((prev) => ({ ...prev, subject: val }))}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((item, idx) => (
                    <SelectItem key={idx} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                  {show ? (
                    <div className="flex gap-[5px]">
                      <Input placeholder="Add Category..." onChange={(e) => setCategory(e.target.value)} />
                      <Button onClick={() => AddCategory(category)}>Add</Button>
                    </div>
                  ) : (
                    <Button onClick={() => setShow(true)}>Add Category</Button>
                  )}
                </SelectContent>
              </Select> */
}
