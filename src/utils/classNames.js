export function classNames(
  className,
  mods = {},
  additional = [],
) {
  return [
    className,
    ...additional,
    ...(Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className)),
  ].join(" ");
}
