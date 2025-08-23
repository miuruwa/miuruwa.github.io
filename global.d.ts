declare module "*.scss" {
  interface ClassNames {
    [className: string]: string;
  }

  const cn: ClassNames;

  export = cn;
}

declare module "*.png";

declare module "*.gif";
