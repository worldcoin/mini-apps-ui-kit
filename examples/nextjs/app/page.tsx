"use client";

import { Button, PhoneField } from "@mini-apps-ui-kit/react";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Button>Button from @mini-apps-ui-kit/react</Button>

      <Button variant="ghost">
        Button from @mini-apps-ui-kit/react with overrided bg color from uiKitTailwindPlugin
      </Button>

      <div className="w-[300px]">
        <PhoneField value={value} onChange={setValue} />
      </div>
    </div>
  );
}
