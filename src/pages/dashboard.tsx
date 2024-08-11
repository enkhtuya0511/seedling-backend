import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "./login/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, BookOpenCheck, BookCopy } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const Dashboard: NextPageWithLayout = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Нийт Хичээлүүд</CardTitle>
            <BookCopy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Нийт Сурагчид</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Суралцаж байгаа хичээлүүд</CardTitle>
            <BookOpenCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Хичээл сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Хичээлүүд</SelectLabel>
              <SelectItem value="apple">Digital Art</SelectItem>
              <SelectItem value="banana">UX/UI Design</SelectItem>
              <SelectItem value="blueberry">Painting</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex p-4 items-center gap-10">
          <div className="flex flex-col items-center bg-slate-500 p-3">
            <h1 className="font-bold text-[30px]">4.2</h1>
            <p>★ ★ ★ ★ ☆</p>
            <p>Дундаж үнэлгээ</p>
          </div>

          <div>
            <div className="flex justify-between gap-3 items-center">
              <p>★ ★ ★ ★ ★</p> <p>5 од</p> <Progress value={100} className="w-[260px]" />
            </div>
            <div className="flex justify-between gap-3 items-center">
              <p>★ ★ ★ ★ ☆</p> <p>4 од</p> <Progress value={80} className="w-[260px]" />
            </div>
            <div className="flex justify-between gap-3 items-center">
              <p>★ ★ ★ ☆ ☆ </p> <p>3 од</p> <Progress value={60} className="w-[260px]" />
            </div>
            <div className="flex justify-between gap-3 items-center">
              <p>★ ★ ☆ ☆ ☆ </p> <p>2 од</p> <Progress value={40} className="w-[260px]" />
            </div>
            <div className="flex justify-between gap-3 items-center">
              <p>★ ☆ ☆ ☆ ☆</p> <p>1 од</p> <Progress value={20} className="w-[260px]" />
            </div>
          </div>
        </div>

        <Card x-chunk="dashboard-01-chunk-4">
          <CardHeader>
            <CardTitle>Үнэлгээнүүд</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="flex items-center gap-5">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="https://avatar.iran.liara.run/public/12" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Olivia Martin</p>
                <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
              </div>
              <div className="ml-auto text-muted-foreground">
                UI/UX-ийн гайхалтай курс! Материалууд сайн зохион байгуулагдсан бөгөөд сонирхолтой байсан.
              </div>
              <div className="ml-auto font-bold">4.5★</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="https://avatar.iran.liara.run/public/88" alt="Avatar" />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Jackson Lee</p>
                <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
              </div>
              <div className="ml-auto text-muted-foreground">
                График дизайны сайн танилцуулга. Видео нь тус болсон боловч жаахан энгийн байсан.
              </div>
              <div className="ml-auto font-medium">3.5★</div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://avatar.iran.liara.run/public/26" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                  <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
                </div>
              </div>
              <div className="ml-auto text-muted-foreground">
                Дижитал маркетингийн стратегиуд нь маш үнэтэй байсан. Хөрөнгө оруулалт хийхэд зохистой!
              </div>
              <div className="ml-auto font-medium">4.7★</div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://avatar.iran.liara.run/public/63" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">William Kim</p>
                  <p className="text-sm text-muted-foreground">will@email.com</p>
                </div>
              </div>
              <div className="ml-auto text-muted-foreground">Маш нарийн, сайн бүтэцтэй курс.</div>
              <div className="ml-auto font-medium">4.3★</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
