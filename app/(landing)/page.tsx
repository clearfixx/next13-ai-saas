import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-3 justify-center items-center">
      <div className="w-full text-center text-3xl font-bold my-4">
        Landing Page (unprotected)
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        </div>
        <div>
          <Link href="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
