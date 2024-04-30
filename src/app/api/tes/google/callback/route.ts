import { oauth2Client } from "@/lib/google";
import { google } from "googleapis";
import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

// SHOULD NEVER BE HARDCODED
const secret = "Mgtt2JZ6kT";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get("code");
    console.log("code", code);
    const { tokens } = await oauth2Client.getToken(code as string);

    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: "v2",
    });

    const { data } = await oauth2.userinfo.get();

    if (!data.email || !data.name) {
      return Response.json({ data: data });
    }

    //   let user = await db.users.findUnique({
    //     where: {
    //       email: data.email,
    //     },
    //   });

    //   if(!user){
    //     user = await prisma.users.create({
    //         data: {
    //             name: data.name,
    //             email: data.email,
    //             address: "-"
    //         }
    //     })
    // }

    const payload = {
      id: 1,
      name: "asdas",
      email: "asdas",
    };

    const expiresIn = 60 * 60 * 1;
    const token = jwt.sign(payload, secret, { expiresIn: expiresIn });

    // return res.redirect(`http://localhost:3000/auth-success?token=${token}`)

    return Response.json({ data: data, token });
  } catch (error: any) {
    console.log("error", error);
    return Response.json({ data: error?.message });
  }
}
