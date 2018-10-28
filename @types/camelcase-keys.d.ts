declare module 'camelcase-keys' {
  export default function camelcaseKeys(input: any, options?: { exclude?: string[] | RegExp[], deep?: boolean }): any;
}
