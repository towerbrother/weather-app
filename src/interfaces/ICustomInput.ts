import { InputHTMLAttributes } from "react";

export default interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
    id: string,
    label: string
};