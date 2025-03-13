export interface TextInterface {
    value: string;
    type: "header-32" | 'body-medium' | 'header-white-32' | "input-text" | 'header-subtext' | 'text-plain-18' | "text-plain-16" | "text-plain-dark-18";
}

export type ButtonType = "bgGreen" | "bgBlack" | "bgWhite";

export interface ButtonInterface{
    text: string;
    type: ButtonType
    loading: boolean;
    icon ?: string;
    iconPosition ?: "right" | "left" | "both";
    fullWidth ?: boolean;
    disabled ?: boolean;
    iconLeft ?: string;
}