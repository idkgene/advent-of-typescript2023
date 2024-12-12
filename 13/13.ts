type DayCounter<
  Start extends number,
  End extends number,
  Acc extends number[] = []
> = Acc["length"] extends End
  ? [...Acc, End][number]
  : DayCounter<
      Start,
      End,
      [...Acc, Acc["length"] extends 0 ? Start : [...Acc, 0]["length"]]
    >;
