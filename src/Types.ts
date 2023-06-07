import { ChangeEvent} from "react";

export interface TextfieldProps{
    id?:string;
    value?:string;
    onChange?:(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    type:string;
    placeholder?:string;
    sx?:any;
    multiline?:boolean;
    rows?:number;
    disabled?:boolean;
    label?:string;
}

export interface ButtonProps {
    text:string;
    type?:"button" | "reset" | "submit",
    sx?:any;
    onClick?:()=>void;
    children?:any;
}