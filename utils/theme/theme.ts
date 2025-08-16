export const setTheme = (theme: string) => {
  localStorage.setItem("theme", theme)
}

export const getTheme = () => {
  const theme = localStorage.getItem("theme")
  return theme
}