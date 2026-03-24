import React from "react";

export enum IconKey {
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
  VIDEO = "video",
}

export type IconProps = {
  iconKey: IconKey;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  basePath?: string;
};

const Icon = ({
  iconKey,
  width = 24,
  height = 24,
  className,
  style,
  basePath = "/assets/icons/",
}: IconProps) => {
  const iconPath = `${basePath}${iconKey}.svg`;

  return (
    <img
      src={iconPath}
      alt={`${iconKey} icon`}
      width={width}
      height={height}
      className={className}
      style={{ width, height, ...style }}
    />
  );
};

export default Icon;
