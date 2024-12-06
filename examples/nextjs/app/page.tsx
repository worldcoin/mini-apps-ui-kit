import { Button } from "@mini-apps-ui-kit/react";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Button>Button from @mini-apps-ui-kit/react</Button>
      <Button variant="ghost">
        Button from @mini-apps-ui-kit/react with overrided bg color from uiKitTailwindPlugin
      </Button>
    </div>
  );
}
