export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the range of the ArrayBuffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view of the buffer
  const dataView = new DataView(buffer);

  // Set the value at the specified position in the Int8Array
  dataView.setInt8(position, value);

  return dataView;
}
