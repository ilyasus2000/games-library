import { Box, Button, Card, Container } from '@mui/material'
import { styled } from 'styled-components'
import { Background } from '../components/background/Background'
import { SidebarMenu } from '../components/sidebarMenu/sidebarMenu'

const PixelContainer = styled(Container)`
  background-color: #1e1e1e;
  color: #fff;
  min-height: 100vh;
  font-family: 'Press Start 2P', monospace;
  padding: 20px;
`
const PixelButton = styled(Button)`
  font-family: 'Press Start 2P', cursive;
  border: 3px solid #fff;
  background-color: #ff4081;
  color: white;
  padding: 10px 20px;
  &:hover {
    background-color: #ff79b0;
  }
`

const PixelCard = styled(Card)`
  background-color: #2b2b2b !important;
  border: 3px solid #fff;
  border-radius: 0px;
  text-align: center;
`

export const HomePage = () => {
  return (
    <Box>
      <SidebarMenu />
      <Background />
      <Box>
        <PixelContainer>
          <PixelCard>
            <PixelButton />
          </PixelCard>
        </PixelContainer>
      </Box>
    </Box>
  )
}
