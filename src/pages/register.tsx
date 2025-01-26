import { Button } from "~/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <>
      <main className="bg-background flex min-h-screen flex-col items-center justify-center gap-y-8">
        <h1 className="text-primary text-3xl">Hello World</h1>
        <Button>Ayo Sentuh Aku</Button>
        <Button onClick={() => setTheme("dark")} size="icon">
          <Moon />
        </Button>
        <Button onClick={() => setTheme("light")} size="icon">
          <Sun />
        </Button>
      </main>
    </>
  );
}
