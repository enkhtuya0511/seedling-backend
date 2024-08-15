"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { LoginInput, useLoginMutation } from "@/graphql/generated";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [loginInput, setLoginInput] = useState({} as LoginInput);
  const [loginMutation, { loading }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const { data } = await loginMutation({
        variables: { input: loginInput },
      });
      if (data) {
        localStorage.setItem("token", data?.login?.token as string);
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.log("error in login: ", error);
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Нэвтрэх</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Имэйл хаяг</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => setLoginInput((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Нууц үг</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Нууц үгээ мартсан уу?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                onChange={(e) => setLoginInput((prev) => ({ ...prev, password: e.target.value }))}
              />
            </div>
            <Button type="submit" className="w-full" onClick={handleLogin} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Түр хүлээнэ үү
                </>
              ) : (
                "Нэвтрэх"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
