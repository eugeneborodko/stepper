import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { USER_KEY } from '../../constants'
import { getFormData } from '../../services/getFormData'
import { setFormData } from '../../services/setFormData'

const UserInfo = ({ title }) => {
  const [user, setUser] = useState({ login: '', password: '' })
  const location = useLocation()
  const navigate = useNavigate()

  const onChange = (key) => {
    return (event) => {
      setUser({ ...user, [key]: event.target.value })
    }
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setFormData(USER_KEY, user)
    navigate({ ...location }, { state: { activeStep: 1 } })
  }

  useEffect(() => {
    const userData = getFormData(USER_KEY)
    if (userData) {
      setUser({
        ...user,
        login: userData.login,
        password: userData.password,
      })
    }
  }, [])

  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Login"
          value={user.login}
          onChange={onChange('login')}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={onChange('password')}
        />
        <button type="submit">Next</button>
      </form>
    </>
  )
}

export default UserInfo
