import { Button } from "@mini-apps-ui-kit/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button>Button from @mini-apps-ui-kit/react</Button>
      <Button>
        Button from @mini-apps-ui-kit/react with overrided bg color from
        uiKitTailwindPlugin
      </Button>
    </div>
  );
}
