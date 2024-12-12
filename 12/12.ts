type FindSanta<T extends any[], Index extends any[] = []> = T extends [
  infer Head,
  ...infer Tail
]
  ? Head extends "🎅🏼"
    ? Index["length"]
    : FindSanta<Tail, [...Index, any]>
  : never;
