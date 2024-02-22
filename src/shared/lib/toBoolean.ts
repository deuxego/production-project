type Params = string | number | boolean | object | null | undefined;

export const toBoolean = (params: Params): boolean => {
  return params ? true : false;
}