
// Get the form element
const form = document.querySelector('#form form');

// Get the budget input element
const budgetInput = document.getElementById('budget');

// Format the budget input value
function formatBudget(value) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return formatter.format(value);
}

// Update the budget input value on change
budgetInput.addEventListener('input', function() {
  const inputValue = budgetInput.value.replace(/[^0-9.]/g, '');
  const numericValue = parseFloat(inputValue);

  if (!isNaN(numericValue)) {
    if (numericValue <= 1000000) {
      budgetInput.value = formatBudget(numericValue);
    } else {
      budgetInput.value = formatBudget(1000000);
    }
  } else {
    budgetInput.value = '';
  }
});

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the form values
  const title = form.elements['title'].value;
  const description = form.elements['description'].value;
  const color = form.elements['color'].value;
  const startDate = form.elements['startDate'].value;
  const status = form.elements['status'].value;
  const budget = budgetInput.value;

  // Perform form validation
  if (
    title.trim() === '' ||
    description.trim() === '' ||
    color.trim() === '' ||
    startDate.trim() === '' ||
    status.trim() === '' ||
    budget.trim() === ''
  ) {
    alert('Please fill in all fields.');
    return;
  }

  // Create a new task object
  const newTask = {
    title: title,
    description: description,
    color: color,
    startDate: startDate,
    status: status,
    budget: budget
  };

  // TODO: Perform necessary actions with the newTask object (e.g., send to server, add to list, etc.)
  console.log('New Task:', newTask);

  // Reset the form
  form.reset();
  budgetInput.value = '';
});