"use server";
import { signIn } from "@/lib/auth";

export const login = async () => {
  const res = await signIn("credentials", { email: "asda", password: "asda" });
  console.log("res", res);
  return res;
};
