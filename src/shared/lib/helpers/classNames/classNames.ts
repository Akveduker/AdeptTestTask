export const classNames = (
  classes: (string | undefined)[],
  conditionClasses: Record<string, boolean> = {}
) => {
  const conditionalArr = [];
  for (const key in conditionClasses) {
    if (conditionClasses[key]) conditionalArr.push(key);
  }
  const classesStr = [
    ...classes.filter((item) => Boolean(item)),
    ...conditionalArr,
  ].join(' ');
  return classesStr;
};
