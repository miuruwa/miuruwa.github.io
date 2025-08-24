export function classNames(
  className: string,
  mods: Record<string, string | boolean | React.JSX.Element | undefined> = {},
  additional: (string | undefined)[] = [],
) {
  return [
    className,
    ...additional,
    ...(Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className)),
  ].join(" ");
}
