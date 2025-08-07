import { useEffect } from 'react'
import './Background.css'

export const Background = () => {
  useEffect(() => {
    const container = document.getElementById('pixel-bg')
    for (let i = 0; i < 100; i++) {
      const pixel = document.createElement('div')
      pixel.className = 'pixel'
      pixel.style.left = Math.random() * 100 + 'vw'
      pixel.style.animationDuration = 2 + Math.random() * 3 + 's'
      pixel.style.top = -Math.random() * 100 + 'px'
      container.appendChild(pixel)
    }
  }, [])

  return <div className='pixel-bg' id='pixel-bg' />
}
