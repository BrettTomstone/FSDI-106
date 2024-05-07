
// Get the form and project list elements
const form = document.querySelector('form');

// Array to store the submitted projects
let projects = [];

// Event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form values
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const startDate = document.getElementById('startDate').value;
  const status = document.getElementById('status').value;
  const budget = document.getElementById('budget').value;

  // Create a project object
  const project = {
    title,
    description,
    startDate,
    status,
    budget
  };

  // Add the project to the array
  projects.push(project);

  // Store the updated projects array in local storage
  localStorage.setItem('projects', JSON.stringify(projects));

  // Clear the form
  form.reset();

  // Redirect to the "My Projects" page
  window.location.href = 'projects.html';
});