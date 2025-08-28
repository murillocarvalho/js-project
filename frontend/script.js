async function addUser() {
    const name = document.getElementById('name').value;
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    loadUsers();
  }
  
  async function loadUsers() {
    const res = await fetch('http://localhost:3000/users');
    const users = await res.json();
    const list = document.getElementById('userList');
    list.innerHTML = '';
    users.forEach(u => {
      const li = document.createElement('li');
      li.textContent = u.name;
      list.appendChild(li);
    });
  }
  
  loadUsers();