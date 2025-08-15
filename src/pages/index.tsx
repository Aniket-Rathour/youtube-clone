import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/Appbar";


export default function Home() {
  return (
    <div>
      <AppBar></AppBar>
      <VideoGrid></VideoGrid>
    </div>
  );
}
