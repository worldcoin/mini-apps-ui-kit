"use client";

import {
  Button,
  Checkbox,
  Chip,
  ColorPickerGroup,
  ColorPickerItem,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  Flag,
  Input,
  ListItem,
  NumberPad,
  OTPField,
  PhoneField,
  Pill,
  RadioGroup,
  RadioGroupItem,
  SearchField,
  Select,
  Switch,
  Token,
  Typography,
} from "@worldcoin/mini-apps-ui-kit-react";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <Typography variant="heading" level={1} className="mb-8">
        Mini Apps UI Kit Components
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Buttons Section */}
        <section className="space-y-4">
          <Typography variant="heading" level={2}>
            Buttons
          </Typography>
          <div className="space-y-2">
            <Button>Default Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </section>

        {/* Input Fields Section */}
        <section className="space-y-4">
          <Typography variant="heading" level={2}>
            Input Fields
          </Typography>
          <Input />
          <SearchField placeholder="Search..." />
          <PhoneField />
        </section>

        {/* Form Elements Section */}
        <section className="space-y-4">
          <Typography variant="heading" level={2}>
            Form Elements
          </Typography>
          <Switch />
          <RadioGroup>
            <RadioGroupItem value="1">Option 1</RadioGroupItem>
            <RadioGroupItem value="2">Option 2</RadioGroupItem>
          </RadioGroup>
          <Checkbox id="checkbox-1" />
        </section>

        {/* Interactive Elements */}
        <section className="space-y-4">
          <Typography variant="heading" level={2}>
            Interactive Elements
          </Typography>
          <OTPField maxLength={6} />
          <NumberPad />
        </section>

        {/* Display Elements */}
        <section className="space-y-4">
          <Typography variant="heading" level={2}>
            Display Elements
          </Typography>
          <div className="flex gap-2 flex-wrap">
            <Pill>Default Pill</Pill>
            <Chip label="Sample Chip" />
            <Token value="BTC" />
            <Token value="USDC" />
            <Token value="WLD" />
            <Flag countryCode="US" />
          </div>
        </section>

        {/* Color and Selection */}
        <section className="space-y-4">
          <Typography variant="heading" level={2}>
            Color & Selection
          </Typography>
          <ColorPickerGroup>
            <ColorPickerItem value="#FF0000" />
            <ColorPickerItem value="#000" />
            <ColorPickerItem value="#FF00FF" />
            <ColorPickerItem value="#0000FF" />
          </ColorPickerGroup>
          <Select
            options={[
              { label: "Option 1", value: "1" },
              { label: "Option 2", value: "2" },
            ]}
            onChange={(value) => console.log(value)}
          />
        </section>
      </div>

      {/* Drawer Example */}
      <Drawer>
        <DrawerTrigger>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-center pb-4">
          <Typography component="h2" variant="heading" level={3}>
            Drawer title
          </Typography>
          <Typography className="p-4">Drawer content</Typography>
          <DrawerClose>
            <div className="p-4">
              <Typography variant="h2">Drawer Content</Typography>
              <ListItem>List Item Example</ListItem>
            </div>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
