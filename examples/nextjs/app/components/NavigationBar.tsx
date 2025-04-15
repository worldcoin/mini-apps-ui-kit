"use client";

import { TabItem, Tabs } from "@worldcoin/mini-apps-ui-kit-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Apps from "../icons/Apps";
import { Wallet } from "../icons/Wallet";

function NavigationBar() {
  const pathname = usePathname();

  return (
    <Tabs value={pathname} className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md">
      <Link href="/" passHref>
        <TabItem value="/" icon={<Apps />} altIcon={<Apps solid />} label="Apps" />
      </Link>
      <Link href="/other" passHref>
        <TabItem value="/other" icon={<Wallet />} altIcon={<Wallet solid />} label="Wallet" />
      </Link>
    </Tabs>
  );
}

export default NavigationBar;
