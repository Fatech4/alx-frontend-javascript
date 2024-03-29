export default function* createIteratorObject(report) {
  // Iterate through each department
  for (const department of Object.values(report)) {
    // Iterate through each employee in the department
    for (const employee of department) {
      yield employee;
    }
  }
}
