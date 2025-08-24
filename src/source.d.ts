declare module '*.module.scss' {
  const classNames: Record<string, string>;
    export default classNames;
  }

declare module "*.png";

declare module "*.gif";

import type { JSX } from "react";

declare global {

  namespace React {
    type ButtonElement = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

    type DivElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

    type LinkElement = DetailedHTMLProps<LinkHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

    type InputElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

    type SelectElement = DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

    type TextareaElement = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

    type ImageElement = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

    type Setter<T> = Dispatch<SetStateAction<T>>;

    type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
  }

  namespace Pages {
    type About = {
      headline: string,
      description: string,
      commissions: {
        headline: string,
        note: string,
        links: Shared.Link[]
      }
      hardware: Shared.TagList;
      software: Shared.TagList;
    }

    type Details = {
      headline: string,
      preferences: Shared.TagList[],
      addons: Shared.TagList,
      turnarounds: {
        headline: string,
        description: string,
      },
      links: Shared.Link[],
    }

    type Home = {
      headline: string,
      description: string,
    }

    type NotFound = {
      headline: string,
      description: string,
      button: Shared.Link
    }

    type Request = {
      headline: string,
      characterCount: string,
      addons: Shared.IdList<Requests.Addons, string>,
      config: {
        progress: Shared.IdList<Requests.Progress, string>,
        color: Shared.IdList<Requests.Color, string>,
        artwork: Shared.IdList<Requests.Artwork, string>,
      },
      links: Shared.Link[],
    }

    type Settings = {
      headline: string,
    }

    type StartUp = {
      headline: string,
    }

    type TOS = {
      headline: string,
      note: {
        headline: string,
        description: string
      },
      terms: {
        headline: string,
        list: Shared.Paragraph[]
      }[],
      navigate: Shared.Link[]
    }
  }
  namespace Translations {
    type Languages = "eng";

    type Translate<Page> = Record<Languages, Page>
  }

  namespace Requests {
    type Addons = "addBackground" | "specialRequest" | "commercialUseFee" | "rushFee";
    type Progress = "sk" | "ln";
    type Color = "nn"| "bw"| "sm"| "rn";
    type Artwork = "bu" | "hb" | "fb" | "ch" | "rs" | "eb";
    type Config = Shared.IdList<Requests.Progress | Requests.Color | Requests.Artwork, string>
  }

  namespace Shared {
    type Footer = {
      info: {
        headline: string,
        description: string
      }
      navigation: {
        headline: string,
        links: Shared.Link[],
        social: Shared.Link[]
      }
    };
    type Currencies = "usd";

    type CurrencyList = Record<Currencies, number>;

    type TagList = {
      headline: string,
      list: string[],
    }

    type IdList<Ids, Value> = {
      headline: string,
      list: Record<Ids, Value>,
    }

    type Link = {
      icon?: JSX.Element,
      title?: string,
      path?: string,
      location?: string,
    }

    type Paragraph = (string | {
      headline: string,
      list: string[]
    })
  }
}