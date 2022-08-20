import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { EXPERIENCE_KEY, USER_KEY } from '../../constants'
import { clearFormData } from '../../services/clearFormData'
import { tabs } from '../../tabs'

const Stepper = () => {
  const location = useLocation()
  location.state = location.state || { activeStep: 0 }
  const tab = tabs[location.state.activeStep]

  useEffect(() => {
    return () => {
      clearFormData(USER_KEY)
      clearFormData(EXPERIENCE_KEY)
    }
  }, [])

  return <>{<tab.component title={tab.title} />}</>
}

export default Stepper
