export default function classNames(...args) {
  return args
    .reduce((acc, val) => {
      if (typeof val === "string") {
        acc.concat(val.split(" "));
      }
      return acc.concat(Object.values(val));
    }, [])
    .join(" ");
}
