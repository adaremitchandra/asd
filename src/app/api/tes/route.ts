import { headers } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";

// SHOULD NEVER BE HARDCODED
const secret = "Mgtt2JZ6kT";
const accessValidation = () => {
  const headersList = headers();
  const authorization = headersList.get("Authorization");

  if (!authorization) {
    throw new Error("Unauthenticated");
  }
  const token = authorization.split(" ")[1];

  try {
    const jwtDecode = jwt.verify(token, secret);
    if (typeof jwtDecode !== "string") {
      return jwtDecode;
    }
  } catch (error) {
    throw new Error("Unauthenticated");
  }
};

export async function GET(request: Request) {
  try {
    const token = accessValidation();

    return Response.json({ data: "Asdas", token });
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ data: "Error" });
  }
}
