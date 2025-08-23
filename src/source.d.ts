declare global {
  type TagList = {
    headline: string,
    list: string[],
  }

  type Link = {
    title: string,
    path?: string,
    location?: string,
  }

  type LanguageKeys = "eng";

  type Languaged<Page> = {
    [key in LanguageKeys]: Page;
  }
  
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
    type About = Languaged<{
      title: string,
      headline: string,
      description: string,
      commissions: {
        title: string,
        note: string,
        links: Link[]
      }
      hardware: TagList;
      software: TagList;
    }>;
  }
};
