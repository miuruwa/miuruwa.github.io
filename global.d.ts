declare module "*.scss" {
  interface ClassNames {
    [className: string]: string;
  }

  const cn: ClassNames;

  export = cn;
}

declare module "*.svg" {
  import type { VFC } from "react";

  const svg: VFC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare module "*.png";

declare module "*.gif";
