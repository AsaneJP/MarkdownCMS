import { TableCell, TableSortLabel } from '@mui/material'
import { memo, VFC } from 'react'

type Props = {
  padding: 'normal' | 'none'
  align: 'left' | 'center' | 'right'
  children: string
}

export const TableHeadCell: VFC<Props> = memo((props) => {
  const { padding, children, align } = props
  return (
    <TableCell padding={padding} align={align}>
      <TableSortLabel sx={{ transform: 'translateX(9px)' }}>
        {children}
      </TableSortLabel>
    </TableCell>
  )
})
