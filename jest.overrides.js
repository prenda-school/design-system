let error = console.error;

console.error = function (message) {
  error.apply(console, arguments); // keep default behaviour
  throw message instanceof Error ? message : new Error(message);
};

let warn = console.warn;

console.warn = function (message) {
  warn.apply(console, arguments); // keep default behaviour
  throw message instanceof Error ? message : new Error(message);
};
