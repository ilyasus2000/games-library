import { yupResolver } from '@hookform/resolvers/yup'
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import * as yup from 'yup'
import { Background } from '../components/background/Background'
import { isUserExists, saveUser } from '../components/utils/storage'

const schema = yup.object().shape({
  username: yup.string().required('Enter login'),
  email: yup.string().email('Incorrect email').required('Enter email'),
  password: yup
    .string()
    .min(6, 'Minimum 6 characters')
    .required('Enter password'),
})

export const RegisterPage = () => {
  const navigate = useNavigate()
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = data => {
    if (isUserExists(data.username)) {
      setSnackbarMessage('Username already taken')
      setSnackbarSeverity('error')
      setSnackbarOpen(true)
      return
    }

    saveUser(data)
    setSnackbarMessage('Registration successful!')
    setSnackbarSeverity('success')
    setSnackbarOpen(true)

    setTimeout(() => {
      navigate('/')
    }, 1500)
  }
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
            Sign up
          </Typography>

          <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            {['username', 'email', 'password'].map(field => (
              <TextField
                key={field}
                placeholder={field[0].toUpperCase() + field.slice(1)}
                type={field === 'password' ? 'password' : 'text'}
                fullWidth
                {...register(field)}
                error={!!errors[field]}
                helperText={errors[field]?.message}
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
              type='submit'
              variant='contained'
              sx={{
                mt: 3,
                backgroundColor: '#00ffcc',
                color: 'black',
                fontFamily: '"Press Start 2P", monospace',
                '&:hover': { backgroundColor: '#ccff00' },
              }}
            >
              SIGN UP
            </Button>
            <Typography
              variant='caption'
              onClick={() => {
                navigate('/login')
              }}
              sx={{
                mt: 2,
                fontSize: 10,
                fontFamily: '"Press Start 2P", monospace',
                color: '#00ffcc',
                textDecoration: 'underline',
                cursor: 'pointer',
                '&:hover': {
                  color: '#ccff00',
                },
              }}
            >
              Already have an account? LOG IN
            </Typography>
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => {
          setSnackbarOpen(false)
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClick={() => {
            setSnackbarOpen(false)
          }}
          severity={snackbarSeverity}
          variant='filled'
          sx={{
            fontFamily: '"Press Start 2P", monospace',
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  )
}
