import { Box } from '@mui/material'
import { Theme } from '../theme/Theme'
import { SideNav } from '../organisms/SideNav'
import { AppBarContent } from '../organisms/AppBarContent'

export const Layout = () => (
  <Theme>
    <Box sx={{ display: 'flex' }}>
      <AppBarContent />
      <SideNav />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <p>main</p>
      </Box>
    </Box>
  </Theme>
)
