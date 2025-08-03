import Image from "next/image";
import { Navbar } from "./Components/Navbar";
import { Middle } from "./Components/Middle";
import { ROI } from "./Components/ROI";

export default function Home() {
  return (
    <div className="infra-background min-h-screen">
      {/* <Navbar /> */}
      <Middle />
      <ROI />
    </div>
  );
}
