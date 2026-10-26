import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Stack } from "@mui/material";
import {
  Accordion, Autocomplete, Breadcrumb, Button, Checkbox, DataTable, Drawer,
  EmptyContent, Form, Link, LoadingContent, Menu, Modal, RadioButton,
  TextInputController, TextAreaController, SelectController,
  FileInputController, RadioGroupController, Toast, Typography,
} from "./index";

const longText = "A very long label with a filename: quarterly_report_" + "2026".repeat(12) + ".pdf";

function Library() {
  const [overlay, setOverlay] = useState<"modal" | "drawer" | null>(null);
  const [toast, setToast] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState<string | number>("");
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [page, setPage] = useState(0);
  const { control } = useForm({ defaultValues: { name: "", notes: "", role: "", file: null, radio: "one" } });
  const options = [{ label: longText, value: "one" }, { label: "Second option", value: "two" }];
  const fields = (
    <Stack spacing={2} sx={{ minWidth: 0 }}>
      <TextInputController control={control} name="name" fieldTitle={longText} />
      <TextAreaController control={control} name="notes" fieldTitle="Notes" />
      <SelectController control={control} name="role" fieldTitle="Role" options={options} />
      <FileInputController control={control} name="file" fieldTitle="Upload" existingFileName={longText} />
      <RadioGroupController control={control} name="radio" options={options} />
    </Stack>
  );
  return (
    <Stack spacing={3} sx={{ width: "100%", minWidth: 0, maxWidth: 1200, mx: "auto" }}>
      <Typography variant="h4">Responsive library</Typography>
      <Breadcrumb breadcrumbs={[{ id: "home", name: "Home" }, { id: "files", name: "Shared documents" }, { id: undefined, name: longText }]} onBreadcrumbClick={() => {}} />
      <Typography>{longText}</Typography>
      <Link href="#form">{longText}</Link>
      <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
        <Button onClick={() => setOverlay("modal")}>Open modal</Button>
        <Button onClick={() => setOverlay("drawer")}>Open drawer</Button>
        <Button onClick={() => setToast(true)}>Show toast</Button>
        <Button onClick={(event) => setAnchor(event.currentTarget)}>Open menu</Button>
      </Stack>
      <Menu anchorEl={anchor} onClose={() => setAnchor(null)} menuItems={[{ label: longText, onClick: () => {} }]} />
      <Checkbox label={longText} checked={checked} onChange={setChecked} />
      <RadioButton label={longText} checked={checked} name="sample" onChange={() => setChecked(!checked)} />
      <Autocomplete label="Search options" options={options} value={value} onChange={setValue} />
      <Accordion title={longText}><Typography>{longText}</Typography></Accordion>
      <Box id="form" sx={{ minWidth: 0 }}>
        <Form onSave={() => {}} onCancel={() => {}} customSaveButtonText="Save all changes to this document">
          {fields}
        </Form>
      </Box>
      <DataTable title="Shared files" columns={[{ name: "name", header: "Name" }, { name: "owner", header: "Owner" }, { name: "status", header: "Status" }]}
        pagination={{ entries: [{ name: longText, owner: "Alex Morgan", status: "approved" }], totalCount: 1000, limit: 10 }}
        selectedPage={page} onPageChange={({ selected }) => setPage(selected)} />
      <EmptyContent isVisible message={longText} />
      <LoadingContent />
      <Modal open={overlay === "modal"} onClose={() => setOverlay(null)} title={longText}>
        <Form onSave={() => setOverlay(null)} onCancel={() => setOverlay(null)}>{fields}</Form>
      </Modal>
      <Drawer isOpen={overlay === "drawer"} onClose={() => setOverlay(null)} onSave={() => setOverlay(null)} onCancel={() => setOverlay(null)} headerTitle={longText}>{fields}</Drawer>
      <Toast open={toast} title="Document saved" message={longText} onClose={() => setToast(false)} autoHideDuration={60000} />
    </Stack>
  );
}

const meta: Meta = { title: "Responsive/Library", component: Library, parameters: { layout: "padded" } };
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const NarrowContainer: Story = {
  decorators: [(Story) => <div style={{ width: 288, maxWidth: "100%", minWidth: 0 }}><Story /></div>],
};
