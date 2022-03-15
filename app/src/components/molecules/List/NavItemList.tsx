import { List } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import MailIcon from '@mui/icons-material/Mail'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import ArticleIcon from '@mui/icons-material/Article'
import PersonIcon from '@mui/icons-material/Person'
import { ListContent } from '../../atom/List/ListContent'

export const NavItemList = () => (
  <List>
    <ListContent icon={<HomeIcon />} name="Home" url="/" />
    <ListContent icon={<ArticleIcon />} name="Article" url="/article" />
    <ListContent icon={<MailIcon />} name="Mail" url="/mail" />
    <ListContent icon={<LeaderboardIcon />} name="Report" url="/report" />
    <ListContent icon={<PersonIcon />} name="User" url="/user" />
    <ListContent icon={<SettingsIcon />} name="Settings" url="/setting" />
  </List>
)
