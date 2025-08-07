import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Card } from './Card'
import './Card.css'

const generateDesk = () => {
  const values = ['👾', '🤖', '👽', '💀', '👮‍♂️', '🧙‍♂️']
  const fullDesk = [...values, ...values]
    .map(value => ({
      id: Math.random(),
      value,
      isFlipped: false,
      isMatched: false,
    }))
    .sort(() => Math.random() - 0.5)
  return fullDesk
}

export const MindGame = () => {
  const [cards, setCards] = useState(generateDesk)
  const [flipped, setFlipped] = useState([])
  const [steps, setSteps] = useState(0)
  const navigate = useNavigate()

  const handleClick = index => {
    if (
      cards[index].isFlipped ||
      cards[index].isMatched ||
      flipped.length === 2
    )
      return

    const updated = [...cards]
    updated[index].isFlipped = true
    setCards(updated)
    setFlipped([...flipped, index])
  }

  useEffect(() => {
    if (flipped.length === 2) {
      const [i, j] = flipped
      const updated = [...cards]
      setSteps(prev => prev + 1)
      if (cards[i].value === cards[j].value) {
        updated[i].isMatched = true
        updated[j].isMatched = true
        setCards([...updated])
        setFlipped([])
      } else {
        setTimeout(() => {
          updated[i].isFlipped = false
          updated[j].isFlipped = false
          setCards([...updated])
          setFlipped([])
        }, 1000)
      }
    }
  }, [flipped, cards])

  return (
    <div className='wrapper'>
      <p className='game-name'> Mind Game </p>
      <div className='grid'>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            value={card.value}
            isFlipped={card.isFlipped || card.isMatched}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <p className='steps'>Steps: {steps}</p>
      <button
        className='back-button'
        onClick={() => {
          navigate('/')
        }}
      >
        Back
      </button>
    </div>
  )
}
