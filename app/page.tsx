import Image from "next/image";
import { Navbar } from "./Components/Navbar";
import { Middle } from "./Components/Middle";

export default function Home() {
  return (
    <div className="gap-6">
      {/* <Navbar /> */}
      <Middle />
    </div>
  );
}
