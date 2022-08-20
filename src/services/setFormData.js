export const setFormData = (key, value) => {
  if (Number.isInteger(value)) {
    return sessionStorage.setItem(key, value)
  }

  sessionStorage.setItem(key, JSON.stringify(value))
}
