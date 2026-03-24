import { default as React } from 'react';
export type AccordionProps = {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
};
declare const Accordion: ({ title, children, defaultOpen }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
