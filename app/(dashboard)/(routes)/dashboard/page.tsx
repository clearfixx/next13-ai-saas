import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashBoardPage = () => {
  return (
    <main className="flex flex-col w-full gap-2 items-center">
      <p>Dashboard Page (Protected)</p>
      <div>
        <Button variant="default">Click me</Button>
      </div>

      <Link href="/">Go to homepage</Link>
    </main>
  );
};

export default DashBoardPage;
