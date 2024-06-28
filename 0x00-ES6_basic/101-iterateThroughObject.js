export default function iterateThroughObject(reportWithIterator) {
  let i = reportWithIterator.next();
  let result = '';

  while (!i.done) {
    result += `${i.value} | `;
    i = reportWithIterator.next();
  }
  return result.slice(0, result.length - 3);
}
