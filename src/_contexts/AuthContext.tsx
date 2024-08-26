"use client";

import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { User0, useUserLazyQuery } from "@/graphql/generated";

type Props = {
  children: ReactNode;
};

type AuthContextType = {
  userdata: User0 | null;
  setUserData: (arg: User0) => void;
};

const AuthContext = createContext({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = (props: Props) => {
  const [userdata, setUserData] = useState<User0 | null>(null);
  const [getUser] = useUserLazyQuery();
  const router = useRouter();
  const pathname = usePathname();
  const { children } = props;

  useEffect(() => {
    const getUserData = async () => {
      if (window) {
        const token = localStorage.getItem("token");
        if (token) {
          try {
            const { data } = await getUser({ variables: { token } });
            if (data) {
              setUserData(data.user as User0);
              console.log("userdata: ", data.user);
            }
            if (pathname === "/") {
              router.push("/dashboard");
            }
          } catch (error) {
            console.error("error getting user:", error);
            router.push("/login");
          }
        } else {
          router.push("/login");
        }
      }
    };
    getUserData();
  }, [router, getUser, pathname]);

  return <AuthContext.Provider value={{ userdata, setUserData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
