import { TableCell } from '@mui/material'
import { memo, VFC } from 'react'

type Props = {
  children: string
  align: 'left' | 'center' | 'right'
  padding: 'normal' | 'none'
}

export const TableBodyCell: VFC<Props> = memo((props) => {
  const { children, align, padding } = props
  return (
    <TableCell align={align} padding={padding}>
      {children}
    </TableCell>
  )
})
