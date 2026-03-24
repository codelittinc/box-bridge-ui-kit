export type BreadcrumbItem = {
    id: string | undefined;
    name: string;
};
export type BreadcrumbProps = {
    breadcrumbs: BreadcrumbItem[];
    onBreadcrumbClick: (id: string | undefined, index: number) => void;
};
declare const Breadcrumb: ({ breadcrumbs, onBreadcrumbClick }: BreadcrumbProps) => import("react/jsx-runtime").JSX.Element;
export default Breadcrumb;
