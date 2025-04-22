/// <reference types="vite/client" />

type ClassProperties<C> = {
  // biome-ignore lint/complexity/noBannedTypes: Function is a fine type.
  [K in keyof C as C[K] extends Function ? never : K]: C[K]
}

declare const GIT_COMMIT_HASH: string;
declare const PACKAGE_VERSION: string;
declare const BUILT_AT: Date;