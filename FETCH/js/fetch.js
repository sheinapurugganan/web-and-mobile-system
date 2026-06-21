const students = [ // Array of student objects
  { name: "Ana", scores: [85, 90, 88], present: true },
  { name: "Ben", scores: [70, 75, 72], present: false },
  { name: "Cara", scores: [95, 92, 94], present: true },
  { name: "Daniel", scores: [60, 65, 70], present: true },
  { name: "Ella", scores: [88, 85, 90], present: true }, // Add more students as needed
  { name: "Felix", scores: [78, 80, 82], present: false },
  { name: "Grace", scores: [92, 89, 94], present: true },
  { name: "Hannah", scores: [73, 70, 68], present: false },
  { name: "Ivan", scores: [81, 84, 79], present: true },
  { name: "Julia", scores: [96, 98, 97], present: true }
];
// Get references to the table body and search input
const tableBody = document.getElementById("studentTable");
const searchInput = document.getElementById("searchInput");

let currentList = students; // Initialize currentList with all students

// Function to display students in the table

function displayStudents(list) {
  tableBody.innerHTML = ""; // Clear the table body before displaying new data

  for (let i = 0; i < list.length; i++) { // Loop through each student in the list
    if (!list[i].present) continue; // Skip if the student is absent
    let total = 0; // Initialize total for each student
    for (let j = 0; j < list[i].scores.length; j++) { // Loop through each score of the student
      if (isNaN(list[i].scores[j])) continue; // Skip if the score is not a number
      total += list[i].scores[j];// Add the score to the total
    }

    let average = total / list[i].scores.length;  // Calculate the average score
    let remarks = average < 75 ? "Failed" : "Passed"; // Determine remarks based on average score 
    let attendance = list[i].present ? "Present" : "Absent";  // Determine attendance status

    tableBody.innerHTML += `    
      <tr>
        <td>${list[i].name}</td>    
        <td>${list[i].scores[0]}</td>   
        <td>${list[i].scores[1]}</td> 
        <td>${list[i].scores[2]}</td> 
        <td>${average.toFixed(2)}</td> 
        <td>${attendance}</td>  
        <td class="${remarks === "Passed" ? "pass" : "fail"}">${remarks}</td>     
      </tr>
    `;
  }
}

function filterStudents(type) {       // Function to filter students based on type based on button click
  let filtered = [];

  for (let i = 0; i < students.length; i++) { // Loop through each student
    let avg =
      (students[i].scores[0] + // Calculate average score
       students[i].scores[1] + // Add the first and second scores
       students[i].scores[2]) / 3; // Divide by 3 to get the average

    if (type === "present" && students[i].present) filtered.push(students[i]); // Filter for present students
    else if (type === "absent" && !students[i].present) filtered.push(students[i]); // Filter for absent students
    else if (type === "passed" && avg >= 75) filtered.push(students[i]); // Filter for students who passed
    else if (type === "failed" && avg < 75) filtered.push(students[i]); // Filter for students who failed
    else if (type === "all") filtered.push(students[i]); // Include all students
  }

  currentList = filtered; // Update currentList with the filtered students
  displayStudents(currentList);   // Display the filtered students
}

function searchStudent() { // Function to search for students based on input
  let keyword = searchInput.value.toLowerCase();  // Get the search keyword and convert it to lowercase
  let result = [];  // Initialize an empty array to store search results

  for (let i = 0; i < currentList.length; i++) {  // Loop through the current list of students  
    if (currentList[i].name.toLowerCase().includes(keyword)) {  // Check if the student's name includes the search keyword
      result.push(currentList[i]);  // If it does, add the student to the result array
    }
  }

  displayStudents(result);  // Display the search results
}

displayStudents(students);  // Initial display of all students

