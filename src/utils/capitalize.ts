/** Uppercase the first letter. */
export default function capitalize(string: string) {
  if (typeof string !== 'string') {
    throw new Error(
      'Prenda Spark: capitalize(string) expects a string argument'
    );
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}
