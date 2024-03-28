import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div>
      <ModeToggle />
      <h1>home page</h1>
      <Button variant={"default"}>go to login</Button>
    </div>
  );
}

export default HomePage;
