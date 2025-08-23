import type { FC, PropsWithChildren } from "react";

declare global {
  type Option = {
    label: string;
    value?: string;
  };

  namespace Blocks {
    type RequestConfigPoint = FC<{
      item: {
        title: string;
        list: [string, string][]
      };
      action: string;
      delay: number;
    }>

    type TOSChapter = FC<{
      item: {
        headline: string;
        list: {
          headline: string;
          list: string[];
        }[];
      }
    }>

    type TOSParagraph = FC<{
      item: {
        headline: string;
        list: string[];
      };
    }>
  }

  namespace Layout {
    type Meta = FC<{
      title: string
    } & PropsWithChildren>
  }

  namespace UI {
    type Button = FC<
      {
        title?: string;
        alt?: string;
        theme?: "usual" | "invert" | "transparent" | "white";
      } & React.DivElement>;

    type Headline = FC<
      {
        title: string;
        type?: "big" | "medium" | "small";
        textCase?: "upper" | "lower";
        delay?: number;
      }>;
  }
}