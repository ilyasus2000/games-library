const USERS_KEY = 'users'
const CURRENT_USER_KEY = 'currentUser'

export const getUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
}

export const saveUser = user => {
  const users = getUsers()
  users.push(user)
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export const isUserExists = username => {
  const users = getUsers()
  return users.some(u => u.username === username)
}

export const saveCurrentUser = user => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || 'null')
}

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY)
}
