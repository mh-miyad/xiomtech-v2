export interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  title: string;
}

export interface EditorConfig {
  imageUrl: string;
  showImageInput: boolean;
  exportedHtml: string;
  exportedJson: string;
  showPreview: boolean;
}

export interface ImageAttributes {
  src: string;
}

export interface LinkAttributes {
  href: string;
}

export interface HeadingLevel {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}
