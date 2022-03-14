import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { memo, ReactElement, VFC } from 'react'

type Props = {
  icon: ReactElement
  name: string
}

export const ListContent: VFC<Props> = memo((props) => {
  const { icon, name } = props
  return (
    <ListItem button>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  )
})
