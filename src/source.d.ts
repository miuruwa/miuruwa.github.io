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
  type Languages = "eng";

  type About = Record<Languages, {
    title: string,
    headline: string,
    description: string,
    commissions: {
      title: string,
      note: string,
      links: Shared.Link[]
    }
    hardware: Shared.TagList;
    software: Shared.TagList;
  }>;
}

declare namespace Shared {
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
