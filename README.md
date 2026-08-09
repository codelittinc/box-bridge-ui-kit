# Box Bridge UI Kit

A React component library built on Material UI, providing themed, reusable components for Box Bridge applications.

## Installation

Install directly from GitHub:

```bash
npm install github:codelittinc/box-bridge-ui-kit
```

### Peer Dependencies

You must install the following peer dependencies in your project:

```bash
npm install react react-dom @emotion/react @emotion/styled
```

`@mui/material` and `@mui/icons-material` are **dependencies of this kit**, not
peers — you do not install them yourself. Consuming apps should import MUI
primitives from the kit rather than depending on MUI directly:

```tsx
// don't
import { Box, Stack, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// do
import { Box, Stack, TextField, SendIcon } from "@codelittinc/box-bridge-ui-kit";
```

Optional peer dependencies (install only if using the related components):

```bash
# For Form field controllers
npm install react-hook-form

# For Autocomplete
npm install @radix-ui/react-select @ariakit/react
```

## Setup

Wrap your application with `BoxBridgeThemeProvider` to enable theming and consistent styling:

```tsx
import { BoxBridgeThemeProvider } from "@codelittinc/box-bridge-ui-kit";

function App() {
  return (
    <BoxBridgeThemeProvider>
      <YourApp />
    </BoxBridgeThemeProvider>
  );
}
```

### Import the CSS

```tsx
import "@codelittinc/box-bridge-ui-kit/dist/box-bridge-ui-kit.css";
```

## Theming

The kit ships with four theme presets: **default** (blue), **dark**, **teal**, and **orange**.

```tsx
import {
  BoxBridgeThemeProvider,
  themePresets,
} from "@codelittinc/box-bridge-ui-kit";

// Use a preset
<BoxBridgeThemeProvider theme={themePresets.dark}>
  <YourApp />
</BoxBridgeThemeProvider>
```

### Custom Themes

Use `deepMerge` to extend any preset with your own overrides:

```tsx
import {
  BoxBridgeThemeProvider,
  themePresets,
  deepMerge,
} from "@codelittinc/box-bridge-ui-kit";

const customTheme = deepMerge(themePresets.default, {
  palette: {
    primary: { main: "#7b1fa2" },
  },
});

<BoxBridgeThemeProvider theme={customTheme}>
  <YourApp />
</BoxBridgeThemeProvider>
```

### CSS Variables

All themes expose CSS custom properties you can use in your own styles:

```
--primary-main, --primary-text
--error-main, --success-main, --warning-main
--common-white, --common-black
--gray-1 through --gray-6
```

## Components

### General

| Component | Description |
|-----------|-------------|
| `Button` | Button with variants (`ButtonCategory`: outlined, primary, secondary, text) and sizes (`ButtonHeight`: small, medium, large) |
| `Typography` | Text rendering with configurable variants |
| `Link` | Styled anchor component |
| `Icon` | SVG icon component (`IconKey`: 3D, Audio, BoxCanvas, BoxNote, Document, Drawing, File, Folder, Image, PDF, Presentation, Spreadsheet, Video) |
| `Spinner` | Loading spinner |
| `Toast` | Toast notifications |
| `Checkbox` | Checkbox input |
| `RadioButton` | Radio button input |
| `Breadcrumb` | Breadcrumb navigation |

### Layout

| Component | Description |
|-----------|-------------|
| `Modal` | Dialog modal |
| `Drawer` | Slide-out side panel |
| `Menu` | Dropdown menu |
| `Accordion` | Expandable/collapsible sections |

### Data Display

| Component | Description |
|-----------|-------------|
| `DataTable` | Table with pagination, custom column rendering, loading/empty states |
| `EmptyContent` | Empty state placeholder |
| `LoadingContent` | Loading skeleton placeholder |

### Forms

| Component | Description |
|-----------|-------------|
| `Form` | Form wrapper with save/cancel actions |
| `Autocomplete` | Searchable select input |
| `TextInputController` | Text input for react-hook-form |
| `TextAreaController` | Textarea for react-hook-form |
| `SelectController` | Select dropdown for react-hook-form |
| `AutocompleteController` | Autocomplete for react-hook-form |
| `RadioGroupController` | Radio button group for react-hook-form |
| `FileInputController` | File upload for react-hook-form |

## Usage Examples

### Button

```tsx
import { Button, ButtonCategory, ButtonHeight } from "@codelittinc/box-bridge-ui-kit";

<Button
  category={ButtonCategory.primary}
  height={ButtonHeight.medium}
  onClick={() => console.log("clicked")}
>
  Click Me
</Button>
```

### DataTable

```tsx
import { DataTable } from "@codelittinc/box-bridge-ui-kit";

const columns = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "role", header: "Role", render: (item) => <strong>{item.role}</strong> },
];

<DataTable
  data={users}
  columns={columns}
  pagination={{ pageCount: 10, onPageChange: (page) => fetchPage(page) }}
/>
```

### Form with Field Controllers

```tsx
import { useForm } from "react-hook-form";
import {
  Form,
  TextInputController,
  SelectController,
} from "@codelittinc/box-bridge-ui-kit";

function MyForm() {
  const { control, handleSubmit } = useForm();

  return (
    <Form onSave={handleSubmit(onSubmit)} onCancel={onCancel}>
      <TextInputController control={control} name="username" label="Username" />
      <SelectController
        control={control}
        name="role"
        label="Role"
        options={[
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" },
        ]}
      />
    </Form>
  );
}
```

## Development

```bash
# Install dependencies
npm install

# Run Storybook (dev mode)
npm run dev

# Build the library
npm run build

# Type check
npm run lint
```

Storybook runs at `http://localhost:6006` and includes interactive examples for all components.
