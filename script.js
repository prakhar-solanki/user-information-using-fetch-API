const userList = document.getElementById('userList');
const reloadBtn = document.getElementById('reloadBtn');
const errorMsg = document.getElementById('errorMsg');

// Fetch and display users
function fetchUsers() {
  userList.innerHTML = '';
  errorMsg.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('user-card');
        card.innerHTML = `
          <h2>${user.name}</h2>
          <p>Email: ${user.email}</p>
          <p>Address: ${user.address.street}, ${user.address.city}</p>
        `;
        userList.appendChild(card);
      });
    })
    .catch(error => {
      errorMsg.textContent = `Error: ${error.message}`;
    });
}

// Reload button
reloadBtn.addEventListener('click', fetchUsers);

// Fetch on page load
fetchUsers();
