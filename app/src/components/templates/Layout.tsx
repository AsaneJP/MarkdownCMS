import { ReactElement, VFC } from 'react'
import { Box } from '@mui/material'
import { Theme } from '../theme/Theme'
import { SideNav } from '../organisms/SideNav'
import { AppBarContent } from '../organisms/AppBarContent'

type Props = {
  title: string
  children: ReactElement
}

export const Layout: VFC<Props> = (props) => {
  const { children, title } = props

  return (
    <Theme>
      <Box sx={{ display: 'flex' }}>
        <AppBarContent title={title} />
        <SideNav />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            paddingTop: '64px',
          }}
        >
          {children}
        </Box>
      </Box>
    </Theme>
  )
}
