export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  // Iterate through the iterator until it's done
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }

  // Remove the last ' | ' from the result
  result = result.slice(0, -3);

  return result;
}
