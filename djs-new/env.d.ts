/// <reference types="vite/client" />

type ClassProperties<C> = {
  // biome-ignore lint/complexity/noBannedTypes: Function is a fine type.
  [K in keyof C as C[K] extends Function ? never : K]: C[K]
}
