"use client";

import { Button, PhoneField } from "@mini-apps-ui-kit/react";
import { useState } from "react";

export default function Home() {
  const [phoneFieldValue, setPhoneFieldValue] = useState("");
  const [phoneFieldDrawerValue, setPhoneFieldDrawerValue] = useState("");

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <Button>Button from @mini-apps-ui-kit/react</Button>

      <Button variant="ghost">
        Button from @mini-apps-ui-kit/react with overrided bg color from uiKitTailwindPlugin
      </Button>

      <div className="w-[300px]">
        <p>PhoneField: select country as dropdown</p>
        <PhoneField value={phoneFieldValue} onChange={setPhoneFieldValue} />
      </div>

      <div className="w-[300px]">
        <p>PhoneField: select country as drawer</p>
        <PhoneField
          value={phoneFieldDrawerValue}
          onChange={setPhoneFieldDrawerValue}
          countrySelectorMode="drawer"
        />
      </div>
    </div>
  );
}
