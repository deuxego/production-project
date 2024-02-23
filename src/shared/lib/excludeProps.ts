import React, { ComponentProps } from 'react';

export const excludeProps = <T extends keyof React.JSX.IntrinsicElements>(
  props: ComponentProps<T>,
  excludedKey: keyof ComponentProps<T>
) => {
  delete props[excludedKey];
  return props;
};
