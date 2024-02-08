import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { URLPetugas, APIResponse } from "@/libs/api";

export async function GET(
  request: NextApiRequest
  // response: NextApiResponse<APIResponse>
) {
  try {
    const res = await URLPetugas.get(`/book`);
    const data = res.data as APIResponse;
    console.log(`res nya ${res}`);
    // response.status(200).json(data);
    return Response.json(data, { status: 200 });
  } catch (error: any | AxiosError) {
    if (axios.isAxiosError(error)) {
      const errorStatus: number = error.status ? error.status : 500;
      let errorMessage = "internal server error";
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      // response.status(errorStatus).json({ message: errorMessage, code: errorStatus });
      return Response.json(null, { status: errorStatus });
    } else {
      // response.status(500).json({ message: "internal server error " + error.message, code: 500 });
      return Response.json(null, { status: 500 });
    }
  }
}
