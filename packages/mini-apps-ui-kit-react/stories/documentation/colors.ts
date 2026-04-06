import nucleusColorTokens from "@jaidensiu/nucleus/nucleus-color-tokens.json";

type ColorGroupKey = "Grey" | "Success" | "Error" | "Warning" | "Info";

type ColorEntry = {
  color: string;
  name: string;
};

const groupOrder: ColorGroupKey[] = ["Grey", "Success", "Error", "Warning", "Info"];

const shadeOrder = {
  Error: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  Grey: ["0", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"],
  Info: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  Success: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  Warning: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
} satisfies Record<ColorGroupKey, string[]>;

const formatName = (tokenName: string) => tokenName.replace(/^color/, "--").replace(/([A-Z])/g, "-$1").toLowerCase();

const getGroupEntries = (group: ColorGroupKey): ColorEntry[] =>
  shadeOrder[group].map((shade) => {
    const tokenName = `color${group}${shade}` as keyof typeof nucleusColorTokens;

    return {
      color: nucleusColorTokens[tokenName],
      name: formatName(tokenName),
    };
  });

export const primaryColorGroups = groupOrder.map((group) => ({
  name: group,
  values: getGroupEntries(group),
}));
