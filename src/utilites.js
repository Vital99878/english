export function* createIndex() {
  let index = 0;
  while (true) {
    yield index;
    index += 1;
  }
}

export function debounce(fn, debounceTime) {
  let timeout;

  return function update() {
    const fn_call = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fn_call, debounceTime);
  };
}

export function* inputCheck() {
  let keyIndex = 0;
  while (true) {
    yield keyIndex;
    keyIndex += 1;
  }
}
