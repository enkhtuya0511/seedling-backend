"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { CreateCourseInput, UpdateCourseInput, useSubjectsByCategoryQuery } from "@/graphql/generated";

type Props = {
  handleData: (arg: string, field: keyof UpdateCourseInput) => void;
  newLesson: UpdateCourseInput;
};

const Topic = ({ handleData, newLesson }: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [topic, setTopic] = React.useState<string>("");
  const [show, setShow] = React.useState<boolean>(false);
  const [topics, setTopics] = React.useState<string[]>([]);

  const { data, refetch } = useSubjectsByCategoryQuery({
    variables: {
      categoryId: newLesson.categoryId as string,
    },
    skip: !newLesson.categoryId,
  });

  React.useEffect(() => {
    if (newLesson.categoryId) {
      refetch();
    }
  }, [newLesson.categoryId, refetch]);

  React.useEffect(() => {
    if (data?.subjectsByCategory) {
      setTopics(data.subjectsByCategory);
    }
  }, [data]);

  const AddTopic = (newTopic: string) => {
    if (newTopic.trim()) {
      setTopics((prevTopics) => [...prevTopics, newTopic]);
      setShow(false);
      setTopic("");
      handleData(newTopic, "subject");
    }
  };

  React.useEffect(() => {
    if (newLesson.subject) {
      setValue(newLesson.subject);
    }
  }, [newLesson.subject, handleData]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? topics.find((topic) => topic === value) : "Чиглэлээ сонгох..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command defaultValue={newLesson.subject as string}>
          {/* <Command> */}
          <CommandInput placeholder="Чиглэлээ сонгох..." />
          <CommandList>
            <CommandEmpty>Чиглэл олдсонгүй...</CommandEmpty>
            <CommandGroup>
              {topics.map((subject) => (
                <CommandItem
                  defaultValue={newLesson.subject as string}
                  key={subject}
                  value={subject}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    // console.log("first", currentValue);
                    handleData(currentValue, "subject");
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === subject ? "opacity-100" : "opacity-0")} />
                  {subject}
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
