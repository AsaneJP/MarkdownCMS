import { VFC } from 'react'
import { useRecoilState } from 'recoil'
import { styled, IconButton, Typography, Toolbar } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { modeConfigState } from '../../globalState/modeConfig'
import { menuOpneState } from '../../globalState/menuOpen'

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

type Props = {
  title: string
}

export const AppBarContent: VFC<Props> = (props) => {
  const { title } = props
  const [open, setOpen] = useRecoilState(menuOpneState)
  const [modeConfig, setModeConfig] = useRecoilState(modeConfigState)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  const onClickMode = () => {
    setModeConfig(!modeConfig)
  }

  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <IconButton
          color="inherit"
          onClick={onClickMode}
          sx={{
            border: 'solid 1px',
            borderRadius: '10px',
            width: '35px',
            height: '35px',
          }}
        >
          {modeConfig ? (
            <DarkModeIcon sx={{ width: '20px', height: '20px' }} />
          ) : (
            <LightModeIcon sx={{ width: '20px', height: '20px' }} />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
