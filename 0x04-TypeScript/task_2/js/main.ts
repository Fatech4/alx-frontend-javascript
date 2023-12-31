interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// interface Employee {
//   workFromHome(): string;
//   getCoffeeBreak(): string;
// }

function isDirector(employee: unknown): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}
function isTeacher(employee: unknown): employee is Teacher {
  return (employee as Teacher).workTeacherTasks !== undefined;
}
function executeWork(employee: unknown) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  }
  if (isTeacher(employee)) {
    console.log(employee.workTeacherTasks());
  }
}
