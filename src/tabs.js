import UserInfo from './components/UserInfo/UserInfo'
import Experience from './components/Experience/Experience'
import Overview from './components/Overview/Overview'

export const tabs = [
  {
    component: UserInfo,
    title: 'Please, enter your login and password',
  },
  {
    component: Experience,
    title: 'Please, enter your experience',
  },
  {
    component: Overview,
    title: 'Overview',
  },
]
