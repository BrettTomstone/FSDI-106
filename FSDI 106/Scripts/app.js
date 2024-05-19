
const form = document.querySelector('form');


let projects = [];


form.addEventListener('submit', (event) => {
  event.preventDefault();


  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const startDate = document.getElementById('startDate').value;
  const status = document.getElementById('status').value;
  const budget = document.getElementById('budget').value;
  const color = document.getElementById('color').value;

  const project = {
    title,
    description,
    startDate,
    status,
    budget,
    color
  };


  projects.push(project);


  localStorage.setItem('projects', JSON.stringify(projects));

  form.reset();

  window.location.href = 'projects.html';
});