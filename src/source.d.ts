declare module '*.scss' {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module "*.png";

declare module "*.gif";

declare namespace React {
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

declare namespace Pages {
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
}
declare namespace Translations {
  type Languages = "eng";

  type Translate<Page> = Record<Languages, Page>
}


declare namespace Shared {
  type Pages = keyof Pages;

  type TagList = {
    headline: string,
    list: string[],
  }

  type Link = {
    title: string,
    path?: string,
    location?: string,
  }
}
