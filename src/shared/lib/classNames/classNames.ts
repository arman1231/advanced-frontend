type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additonal: string[]
): string {
  return [cls, ...additonal, Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className, value]) => className)
    ].join(" ");
}
