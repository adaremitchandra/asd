"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";

const TesPage = () => {
  return (
    <div>
      <Button
        onClick={async () => {
          const res = await signIn("credentials", { email: "asdas", password: "asdas" });
          console.log("res", res);
        }}
      >
        asda
      </Button>
    </div>
  );
};

export default TesPage;
