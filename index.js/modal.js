// – Abrir/cerrar el formulario

export function openModal(user = null) {
  const modal = document.getElementById('userModal');
  modal.classList.add('open');

  if (user) {
    fillForm(user);
  }
}

// Cierra el modal
export function closeModal() {
  document.getElementById('userModal').classList.remove('open');
}

// Llena el formulario con los datos de un usuario (para editar)
export function fillForm(user) {
  document.getElementById('userId').value = user.id;
  document.getElementById('name').value = user.name;
  document.getElementById('description').value = user.description;
  document.getElementById('Capacity').value = user.Capacity;

  document.getElementById('dateOfAdmission').value = user.dateOfAdmission;
}

// Limpia el formulario (para nuevo usuario)
export function clearForm() {
  document.getElementById('userId').value = '';
  document.getElementById('name').value = '';
  document.getElementById('description').value = '';
  document.getElementById('Capacity').value = '';
  
  document.getElementById('dateOfAdmission').value = '';
}
