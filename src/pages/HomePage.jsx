import { NavLink } from 'react-router'
import { Background } from '../components/background/Background'

export const HomePage = () => {
  return (
    <nav>
      <Background>
        <div className='navigation-menu'>
          <NavLink to={'/game'} end>
            Mind Game
          </NavLink>
          <NavLink to={'/'} end>
            Home
          </NavLink>
        </div>
      </Background>
    </nav>
  )
}
