import { memo, VFC } from 'react'
import { TableHead, TableRow } from '@mui/material'
import { TableHeadCell } from '../../atom/Table/TableHeadCell'
import { TableCheckBox } from '../../atom/Table/TableCheckBox'

export const UserTableHead: VFC = memo(() => (
  <TableHead>
    <TableRow>
      <TableCheckBox />
      <TableHeadCell padding="none" align="left">
        Name
      </TableHeadCell>
      <TableHeadCell padding="normal" align="center">
        email
      </TableHeadCell>
      <TableHeadCell padding="normal" align="center">
        role
      </TableHeadCell>
    </TableRow>
  </TableHead>
))
