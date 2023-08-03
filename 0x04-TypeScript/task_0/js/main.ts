interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Faruk',
  lastName: 'Adekola',
  age: 24,
  location: 'Ife',
};

const student2: Student = {
  firstName: 'Fuhad',
  lastName: 'Yusuf',
  age: 26,
  location: 'Abuja',
};

const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  // Loop through the studentsList array and append a new row for each student
  studentsList.forEach((student) => {
    const row = tableBody.insertRow();

    // Add first name and location cells to the row
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    // Set the content of the cells to the student's data
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

// Call the renderTable function to create the table
renderTable();
