# @worldcoin/mini-apps-ui-kit-react


## 1.3.7

### Patch Changes

- Disable `CountrySelectorButton` if `PhoneField` is disabled

## 1.3.6

### Patch Changes

- Export `ButtonProps` from the package

## 1.3.5

### Patch Changes

- Export `PasswordField` from the package

## 1.3.4

### Patch Changes

- Add `use client` directive to SafeAreaWindow.

## 1.3.3

### Patch Changes

- Add safe bottom margin to AlertDialog

## 1.3.2

### Patch Changes

- Add support to `tap` pseudoclass

## 1.3.1

### Patch Changes

- Remove deprecated Minikit haptic options. (`rigid` and `soft`)

## 1.3.0

### Minor Changes

- 57f639e: Add SafeAreaView component
- 57f639e: Add useSafeAreaInsets hook

## 1.2.5

### Patch Changes

- Use woff2 font files

## 1.2.4

### Patch Changes

- Remove default autocomplete value in the PhoneField. The dependency underneath `react-international-phone` does not support autocomplete.

## 1.2.3

### Patch Changes

- Hide the clear button when there's no content in the SearchField.

## 1.2.2

### Patch Changes

- Propagate click events from ToastViewport to elements below.

## 1.2.1

### Patch Changes

- Execute haptics before callback in Button.

## 1.2.0

### Minor Changes

- Add Skeleton component

## 1.1.0

### Minor Changes

- Add Haptic component.

## 1.0.1

### Patch Changes

- d434f55: Fix specialty color utilities in Tailwind

## 1.0.0

### Minor Changes

- Remove Typography `mono` variant
- Remove PhoneField `hideDialCode`, `placeholder` and `countrySelector` props.
- Replace the Button `isLoading` prop with `state`
- Remove Tailwind fonts `-mono` and `-display`
- Remove ListItem `variant` prop
- Add Typography `label` and `display` variants
- Add AlertDialog component
- Add PasswordField component
- Add BulletList component
- Add Spinner component
- Replace SearchField `placeholder` with `label`
- Add BottomBar component
- Add Drawer `height` prop for fit and full page size.
- Add TextArea component
- Add Progress component
- b465d6a: Update color palette
- Add Toast component
- Remove the Button `icon` prop. The Button now accepts icons in children.
- Add Button `icon` size.
- Replace Input `placeholder` prop with `label`.
- Remove the Button `md` size.
- Add Token `variant` support.
- Add CountryDrawer component
- Add Tabs component
- Remove the Button `ghost` variant.
- Remove the Button `radius` prop.
- Add TopBar component
- Add WalletAddressField
- Add Marble component
- Add Toast component
- Add Input variants: default and floating label.
- Add ToggleGroup component
- Add CircularIcon component
- Add CircularState component
- Add LiveFeed component

### Patch Changes

- Update styles for Typography
- Add client directive to SearchField
- Add support for transparency color utility classes
- Add EU flag support
- Allow decimals in NumberPad
- Host static images for Flag component

## 0.0.8

### Patch Changes

- e30fd26: Add client directive to SearchField

## 0.0.7

### Patch Changes

- Set correct color in Select chevron icon
- Add clear button to SearchField

## 0.0.6

### Patch Changes

- Set default input type for PhoneField to `tel`
- Fix type for optional props in `Typography`

## 0.0.5

### Patch Changes

- Fix Typography component type definitions

## 0.0.4

### Patch Changes

- Added `onLongDeletePress` prop to `NumberPad` component to handle long press on the delete button.
- Added `longPressOptions` prop to `NumberPad` component to customize long press behavior.

## 0.0.3

### Patch Changes

- Allow customization of countries in PhoneField via the `countries` prop.

## 0.0.1

### Minor Changes

- Button component
- Checkbox component
- Chip component
- ColorPicker component
- Drawer component
- Flag component
- Form component
- Input component
- ListItem component
- NumberPad component
- OTPField component
- PhoneField component
- Pill component
- RadioGroup component
- SearchField component
- Select component
- Switch component
- Token component
- Typography component
- Tailwind plugin
