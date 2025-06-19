export interface TextInterface {
    value: string;
    type: "header-32" | 'body-medium' | 'header-white-32' | "input-text" | 'header-subtext' | 'text-plain-18' | "text-plain-16" | "text-plain-dark-18" | "text-plain-dark-16" | "nav-text" | "text-green-bold" | "number-big" | 'header-text-20' | 'main-text-bold' | "main-text-regular" | "text-small-light" | 'text-plain-green-18' | "text-small-white" | "header-dark-light-32" | "number-small-white" | "text-green-24" | 'header-text-white-20' | 'header-text-white-bold-20' | 'text-small-green' | 'text-small-red';
    blockType ?: boolean;
}

export type ButtonType = "bgGreen" | "bgBlack" | "bgWhite" | 'bgGrey' | 'bgPlain'

export interface ButtonInterface {
    text: string;
    type: ButtonType
    loading: boolean;
    icon?: string;
    iconPosition?: "right" | "left" | "both";
    fullWidth?: boolean;
    disabled?: boolean;
    iconLeft?: string;
    lessRounded?: boolean;
    action ?: () => void
    smallerType ?: boolean
}

export interface TransactionInterface {
    date: string;
    amount: number;
    balance: number;
    channel: string;
    status: 'Completed' | "In progress" | "Failed" 
}