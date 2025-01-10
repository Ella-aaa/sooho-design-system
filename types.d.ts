// types.d.ts

declare module "sooho-design-system" {
  // Button 컴포넌트의 타입 정의
  export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "tertiary";
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "large";
  }

  export const Button: React.FC<ButtonProps>;

  // LabelValue 컴포넌트의 타입 정의
  export interface LabelValueProps {
    label: string;
    value: string | number;
    className?: string;
  }

  export const LabelValue: React.FC<LabelValueProps>;
}
