import { default as React } from 'react';
export declare enum IconKey {
    THREE_D = "3d",
    AUDIO = "audio",
    BOX_CANVAS = "box-canvas",
    BOX_NOTE = "box-note",
    DOCUMENT = "document",
    DRAWING = "drawing",
    FILE = "file",
    FOLDER = "folder",
    IMAGE = "image",
    PDF = "pdf",
    PRESENTATION = "presentation",
    SPREADSHEET = "spreadsheet",
    VIDEO = "video"
}
export type IconProps = {
    iconKey: IconKey;
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
    basePath?: string;
};
declare const Icon: ({ iconKey, width, height, className, style, basePath, }: IconProps) => React.JSX.Element;
export default Icon;
