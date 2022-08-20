export const getFormData = (key) => {
  const formData = sessionStorage.getItem(key)

  if (Number.isInteger(formData)) {
    return formData
  }

  return JSON.parse(formData)
}
