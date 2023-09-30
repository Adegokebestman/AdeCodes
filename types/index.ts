import { type } from "os";
import { MouseEventHandler } from "react";
import { PortableTextBlock } from "sanity";

export interface customButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export type Project = {
name: string
_id: string;
_createdAt: Date;
slug: string;
url: string;
image: string;
alt: string,
content: PortableTextBlock[];
}

// export type ServiceProps = {
//     title: string;
//     icon: string;
//     description: string;
// }