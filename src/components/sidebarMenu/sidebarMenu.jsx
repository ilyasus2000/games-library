import MenuIcon from '@mui/icons-material/Menu'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

export const SidebarMenu = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  const menuItems = [
    { text: 'Home', icon: <SportsEsportsIcon />, link: '/home' },
    { text: 'Games', icon: <SportsEsportsIcon />, link: '/games' },
    { text: 'Leaderboard', icon: <SportsEsportsIcon />, link: '/leaderboard' },
    { text: 'Profile', icon: <SportsEsportsIcon />, link: '/profile' },
    { text: 'Settings', icon: <SportsEsportsIcon />, link: '/settings' },
  ]

  useEffect(() => {
    const handleClickOutside = e => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1100,
          color: '#00ffcc',
          bgcolor: 'black',
          '&:hover': { bgcolor: '#111' },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Box
        ref={menuRef}
        sx={{
          position: 'fixed',
          left: open ? 0 : '-240px',
          top: 0,
          height: '100vh',
          width: 240,
          bgcolor: 'black',
          borderRight: '4px solid #00ffcc',
          boxShadow: open ? '0 0 20px #00ffcc' : 'none',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          zIndex: 1000,
          transition: 'left 0.3s ease-in-out',
        }}
      >
        <Box
          sx={{
            fontFamily: '"Press Start 2P", monospace',
            color: '#00ffcc',
            fontSize: '14px',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Menu
        </Box>
        <List>
          {menuItems.map(item => (
            <ListItemButton
              key={item.text}
              onClick={() => {
                navigate(item.link)
                setOpen(false)
              }}
              sx={{
                color: '#fff',
                fontFamily: '"Press Start 2P", monospace',
                borderRadius: '8px',
                mb: 1,
                '&:hover': {
                  bgcolor: '#111',
                  boxShadow: `0 0 10px ${'#00ffcc'}`,
                  color: '#00ffcc',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: '12px',
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  )
}
