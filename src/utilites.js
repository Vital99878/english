export function* createIndex() {
  let index = 0;
  while (true) {
    yield index;
    index += 1;
  }
}
