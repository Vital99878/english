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

export function* inputCheckClass(answers, keys, wrongClass) {
  if (!keys) return;
  let keyIndex = 0;
  while (true) {
    if (typeof keys[keyIndex] === 'string') {
      yield answers[`key_${keyIndex}`] === keys[keyIndex] || answers[`key_${keyIndex}`] === undefined
        ? null
        : wrongClass;
      keyIndex += 1;
    }
    if (Array.isArray(keys[keyIndex])) {
      yield keys[keyIndex].includes(answers[`key_${keyIndex}`]) || answers[`key_${keyIndex}`] === undefined
        ? null
        : wrongClass;
      keyIndex += 1;
    }
  }
}
