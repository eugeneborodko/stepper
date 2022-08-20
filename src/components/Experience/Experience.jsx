import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { EXPERIENCE_KEY } from '../../constants'
import { getFormData } from '../../services/getFormData'
import { setFormData } from '../../services/setFormData'

const Experience = ({ title }) => {
  const [experience, setExperience] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()

  const onExperienceChange = (event) => {
    setExperience(event.target.value)
  }

  useEffect(() => {
    const experienceData = getFormData(EXPERIENCE_KEY)
    if (experienceData) {
      setExperience(getFormData(EXPERIENCE_KEY))
    }
  }, [])

  const onExperienceSubmit = () => {
    setFormData(EXPERIENCE_KEY, Number(experience))
    navigate({ ...location }, { state: { activeStep: 2 } })
  }

  return (
    <>
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="Enter your experience"
        value={experience}
        onChange={onExperienceChange}
      />
      <button type="button" onClick={onExperienceSubmit}>
        Next
      </button>
    </>
  )
}

export default Experience
