export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  // Iterate through the iterator until it's done
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }

  // Remove the trailing ' | ' from the result string
  if (result.length > 0) {
    result = result.slice(0, -3); // Remove the last 3 characters
  }

  return result;
}
