// 8-clean_set.js

export default function cleanSet(set, startString) {
  let result = '';
  if (startString === '') {
    return '';
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }

  // Remove the last '-' from the result if it exists
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}
