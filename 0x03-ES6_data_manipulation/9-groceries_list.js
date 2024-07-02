export default function groceriesList() {
  const lst = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const newLst = new Map();
  // eslint-disable-next-line no-unused-vars
  for (const element of lst) {
    newLst.set(element[0], element[1]);
  }
  return newLst;
}
