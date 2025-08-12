import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router'
import { Background } from '../components/background/Background'

export const WelcomePage = () => {
  const navigate = useNavigate()
  const cards = [
    {
      title: 'New Player',
      image: 'archer.png',
      link: '/register',
      borderColor: '#00ffcc',
    },

    {
      title: 'Login',
      image: 'knight.png',
      link: '/login',
      borderColor: '#ccff00',
    },
  ]

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        zIndex: 2,
      }}
    >
      <style>
        {`
          @keyframes blink {
          10%, 50%, 100% {opacity:1;}
          25%, 75% { opacity:0;}
          }
          `}
      </style>
      <Typography
        variant='h3'
        sx={{
          position: 'absolute',
          top: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: '#00ffcc',
          animation: 'blink 1.5s infinite',
          zIndex: 3,
          fontFamily: '"Press Start 2P", monospace',
        }}
      >
        WELCOME PLAYER
      </Typography>
      <Background />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'contain',
          padding: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          flexWrap: 'wrap',
          p: 2,
        }}
      >
        {cards.map(card => (
          <Card
            key={card.title}
            sx={{
              width: 450,
              height: 450,
              bgcolor: 'black',
              border: `4px solid ${card.borderColor}`,
              boxShadow: `0 0 15px ${card.borderColor}`,
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 0 25px $(card.borderColor)',
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <CardActionArea
              onClick={() => {
                navigate(card.link)
              }}
            >
              <Box
                component='img'
                src={card.image}
                alt={card.title}
                sx={{
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                  borderBottom: '4 solid $(card.borderColor)',
                }}
              />
              <CardContent>
                <Typography
                  variant='h6'
                  align='center'
                  sx={{
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '14px',
                    color: card.borderColor,
                  }}
                >
                  {card.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
