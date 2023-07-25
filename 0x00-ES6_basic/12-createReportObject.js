import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(
  employeesList = createEmployeesObject(),
) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      const numberOfDepartments = Object.keys(this.allEmployees).length;
      return numberOfDepartments;
    },
  };
}
