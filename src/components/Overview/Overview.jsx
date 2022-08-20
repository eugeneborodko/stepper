import { EXPERIENCE_KEY, USER_KEY } from '../../constants'
import { getFormData } from '../../services/getFormData'

const Overview = ({ title }) => {
  const user = getFormData(USER_KEY)
  const experience = getFormData(EXPERIENCE_KEY)

  return (
    <>
      <h1>{title}</h1>
      {user && (
        <>
          <div>Your login: {user.login}</div>
          <div>Your password: {user.password}</div>
        </>
      )}
      {experience && <div>Your experience: {experience}</div>}
    </>
  )
}

export default Overview
