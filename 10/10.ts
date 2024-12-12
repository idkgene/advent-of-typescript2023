type StreetSuffixTester<
  Street extends string,
  Suffix extends string
> = Street extends `${infer _}${Suffix}` ? true : false;
