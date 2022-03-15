import { Checkbox, TableCell } from '@mui/material'
import { memo } from 'react'

export const TableCheckBox = memo(() => (
  <TableCell padding="checkbox">
    <Checkbox color="primary" />
  </TableCell>
))
