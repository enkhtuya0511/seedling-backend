"use client";

import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, useUserLazyQuery } from "@/pages/generated";

type Props = {
  children: ReactNode;
};

type AuthContextType = {
  userdata: User | null;
  setUserData: (arg: User) => void;
};

const AuthContext = createContext({} as AuthContextType);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = (props: Props) => {
  const router = useRouter();
  const [userdata, setUserData] = useState<User | null>(null);
  const { children } = props;
  const [getUser] = useUserLazyQuery();

  useEffect(() => {
    const getUserData = async () => {
      if (window) {
        const token = localStorage.getItem("token");
        console.log("token", token);
        if (token) {
          try {
            const { data } = await getUser({ variables: { token } });
            if (data) {
              setUserData(data.user);
              console.log("first");
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
  }, [router, getUser]);

  return <AuthContext.Provider value={{ userdata, setUserData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
