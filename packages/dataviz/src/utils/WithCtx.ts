import deepmerge from 'deepmerge';
import { PartialDeep } from 'type-fest';

export type WithCtx<T> = {
  ctx: T;
};

export type WithOverridableCtx<T> = {
  /**
   * The context of the component. This is typically provided by the expected parent component(s) and marked as optional as a result. If not provided, an error is thrown. To render this component without the expected parent component(s), specify `ctx` explicitly.
   */
  ctx?: T;
  /**
   * Partially override the context of the component.
   */
  overrides?: PartialDeep<T>;
};

export function mergeCtxOverrides<T, U>(
  ctx: T,
  // separate generic of `overrides` from `ctx` to prevent `T` being inferred from `PartialDeep<T>` which garbles the type in practice
  overrides?: U extends PartialDeep<T> ? U : never
): T {
  if (!overrides) {
    return ctx;
  }

  return deepmerge<T>(ctx, overrides);
}
