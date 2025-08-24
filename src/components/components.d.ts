import type { FC, JSX, PropsWithChildren } from "react";

declare global {
  type Option = {
    label: string;
    value?: string;
  };

  namespace Blocks {
    type RequestConfigPoint<RequestType> = {
      item: Requests.Config<RequestType>;
      state: RequestType;
      DoAction: CallableFunction;
      delay: number }

    type TOSChapter = FC<{
      item: {
        headline: string;
        list: Shared.Paragraph[];
      }
    }>

    type TOSParagraph = FC<{
      item: Shared.Paragraph;
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
        icon?: JSX.Element,
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