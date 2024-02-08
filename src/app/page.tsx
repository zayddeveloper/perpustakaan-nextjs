"use client";
import { useEffect, useState } from "react";
import ListBuku from "@/components/ListBuku";
import Image from "next/image";
import axios, { AxiosError } from "axios";
import { APIResponse, URLPetugas } from "@/libs/api";

export default function Home() {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  // const anime = await response.json();
  // console.log(`tes ${anime}`)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/api/books`);
    const fetchData = async () => {
      console.log(`cek`);
      setLoading(true);
      try {
        const res = await URLPetugas.get(`/book`);
        const data = res.data as APIResponse;
        setData(data.data);
        // console.log(`res nya ${JSON.stringify(data.data)}`);
      } catch (error: any | AxiosError) {
        if (axios.isAxiosError(error)) {
          const errorStatus: number = error.status ? error.status : 500;
          let errorMessage = "internal server error";
          if (error.response) {
            errorMessage = error.response.data.message;
          }
          console.log(`errorMessage nya${errorMessage}`);
        } else {
          console.log(
            `errorMessage nya ${"internal server error " + error.message}`
          );
        }
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className="grid grid-cols-3 gap-2 h-32">
          {data.map((data: any) => {
            return (
              <div key={data.id}>
                <ListBuku title={data.judul} />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
