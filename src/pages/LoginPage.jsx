import { Box, Button, TextField, Typography } from '@mui/material'

import { Background } from '../components/background/Background'

export const LoginPage = () => {
  return (
    <>
      <Background />
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: 360,
            bgcolor: '#0d0d0d',
            color: '#00ffcc',
            borderRadius: 4,
            p: 4,
            boxShadow: '0 0 20px #00ffcc',
            fontFamily: '"Press Start 2P", monospace',
            textAlign: 'center',
          }}
        >
          <Typography
            variant='h6'
            sx={{
              mb: 3,
              animation: 'flicker 2s infinite',
              fontFamily: '"Press Start 2P", monospace',
              color: '#00ffcc',
            }}
          >
            Sign in
          </Typography>

          <Box
            component='form'
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            {['Username', 'Password'].map((label, idx) => (
              <TextField
                placeholder={label}
                type={label === 'Password' ? 'password' : 'text'}
                variant='outlined'
                fullWidth
                InputProps={{
                  sx: {
                    fontFamily: '"Press Start 2P", monospace',
                    color: '#00ffcc',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-input::placeholder': {
                    color: '#00ffcc',
                    opacity: 1,
                  },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#1a1a1a',
                    borderRadius: 2,
                    '& fieldset': { borderColor: '#00ffcc' },
                    '&:hover fieldset': { borderColor: '#ccff00' },
                    '&.Mui-focused fieldset': { borderColor: '#ccff00' },
                  },
                }}
              />
            ))}

            <Button
              variant='contained'
              sx={{
                mt: 3,
                backgroundColor: '#00ffcc',
                color: 'black',
                fontFamily: '"Press Start 2P", monospace',
                '&:hover': { backgroundColor: '#ccff00' },
              }}
            >
              SIGN IN
            </Button>
          </Box>

          <style>
            {`
						@keyframes flicker {
							0%, 100% { opacity: 1; }
							50% { opacity: 0.7; }
						}
					`}
          </style>
        </Box>
      </Box>
    </>
  )
}
