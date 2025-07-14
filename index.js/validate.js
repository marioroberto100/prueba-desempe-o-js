
// – Validación simple


export function validateForm(user) {
  const { name, description, Capacity, dateOfAdmission } = user;
  return name && description && Capacity && dateOfAdmission;
}

