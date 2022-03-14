import { List } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import MailIcon from '@mui/icons-material/Mail'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import ArticleIcon from '@mui/icons-material/Article'
import PersonIcon from '@mui/icons-material/Person'
import { ListContent } from '../atom/ListContent'

export const NavItemList = () => (
  <List>
    <ListContent icon={<HomeIcon />} name="Home" />
    <ListContent icon={<ArticleIcon />} name="Article" />
    <ListContent icon={<MailIcon />} name="Mail" />
    <ListContent icon={<LeaderboardIcon />} name="Report" />
    <ListContent icon={<PersonIcon />} name="User" />
    <ListContent icon={<SettingsIcon />} name="Settings" />
  </List>
)
