type ClassesObject = {
  [key: string]: boolean;
};

const classNames = (...props: Array<string | ClassesObject>): string => {
  const classes = props
    .reduce((acc, item) => {
      if (typeof item === 'string') {
        acc.push(item);
      } else {
        for (const key in item) {
          if (item[key]) {
            acc.push(key);
          }
        }
      }
      return acc;
    }, [] as string[])
    .join(' ');

  return classes;
};

export default classNames;
