import '../App'
import { Background } from '../components/background/Background'

export const HomePage = () => {
  return (
    <nav>
      <Background />
      <div className='centered-wrapper'>
        <h1 className='arcade-text'>ILYASUS 2000</h1>
      </div>
    </nav>
  )
}
