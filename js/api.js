
// comunicación con la API:



const API_URL = 'http://localhost:3000/users';

export async function getUsers() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addUser(user) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  return res.json();
}

export async function updateUser(id, user) {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
}

export async function deleteUser(id) {
  return fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}

