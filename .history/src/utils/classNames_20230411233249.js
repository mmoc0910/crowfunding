export default function classNames(...args) {
  return args
    .reduce((acc, val) => {
      acc.concat(val.split(" "));
    }, [])
    .join(" ");
}
