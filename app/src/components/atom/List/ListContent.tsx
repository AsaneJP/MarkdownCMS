import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { memo, ReactElement, VFC } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  icon: ReactElement
  name: string
  url: string
}

export const ListContent: VFC<Props> = memo((props) => {
  const { icon, name, url } = props
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(url)
  }

  return (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  )
})
