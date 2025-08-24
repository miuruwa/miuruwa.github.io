/// <reference types="vite/types/importMeta.d.ts" />
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
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
    addons: {
      headline: string
    },
    progress: {
      headline: string
    },
    color: {
      headline: string
    },
    artwork: {
      headline: string
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

declare namespace Translations {
  type Languages = "eng";

  type Translate<Page> = Record<Languages, Page>
}

declare namespace Requests {
  type Addons = "addBackground" | "specialRequest" | "commercialUseFee" | "rushFee";
  type Progress = "sk" | "ln" | undefined;
  type Color = "nn"| "bw"| "sm"| "rn" | undefined;
  type Artwork = "bu" | "hb" | "fb" | "ch" | "rs" | "eb" | undefined;
  type Config<ConfigType> = Shared.IdList<ConfigType, string>
  type State = {
    progress: Requests.Progress,
    color: Requests.Color,
    artwork: Requests.Artwork,
    characterCount: number,
    addBackground: boolean,
    specialRequest: boolean,
    commercialUseFee: boolean,
    rushFee: boolean,
  }
  type Option = {
    type: "progress" | "color" | "artwork" | "addons",
    value: Requests.Progress | Requests.Color | Requests.Artwork | Requests.Addons
    text: string,
    price: number,
  }

  type Query = {
    isLoading: boolean,
    error: string,
    requests: Requests.Option[]
  }
}

declare namespace Shared {
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

  type CurrencyList<Type> = {
    name: Type,
    currency: {
      name: Currencies,
      value: number
    }[],
  };

  type TagList = {
    headline: string,
    list: string[],
  }

  type IdList<Ids, Value> = {
    headline: string,
    list: {
      name: Ids
      value: Value
    }[],
  }

  type Link = {
    icon?: import("react").JSX.Element,
    title?: string,
    path?: string,
    location?: string,
  }

  type Paragraph = (string | {
    headline: string,
    list: string[]
  })
}