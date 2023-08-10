import { MouseEventHandler } from "react";
import { PortableTextBlock } from "sanity";

export interface CustomButtonProps {
title: string;
containerStyles?: string,
handleClick?: MouseEventHandler <HTMLButtonElement>;
btnType?: "button" | "submit";
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