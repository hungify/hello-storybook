export type TransientProps<StyleProps, PropsToStyle extends string> = {
  [P in keyof StyleProps as `$${Extract<P, PropsToStyle>}`]: StyleProps[P];
};
