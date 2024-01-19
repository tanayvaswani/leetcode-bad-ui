import Navbar from "@/components/navbar/navbar";
import { ResizableDemo } from "@/components/resizable/resizable-container";

export default function Home() {
  return (
    <main className="h-full">
      <Navbar />
      <ResizableDemo />
    </main>
  );
}
