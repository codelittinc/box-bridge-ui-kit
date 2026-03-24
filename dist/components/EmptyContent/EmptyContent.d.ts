import { default as React } from 'react';
export type EmptyContentProps = {
    message: string;
    isVisible: boolean;
    style?: React.CSSProperties;
};
declare function EmptyContent({ message, isVisible, style, }: EmptyContentProps): React.ReactElement | null;
export default EmptyContent;
