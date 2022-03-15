import { memo, VFC } from 'react'
import { TableHead, TableRow } from '@mui/material'
import { TableCheckBox } from '../../atom/Table/TableCheckBox'
import { TableHeadCell } from '../../atom/Table/TableHeadCell'

export const TableHeader: VFC = memo(() => (
  <TableHead>
    <TableRow>
      <TableCheckBox />
      <TableHeadCell padding="none" align="left">
        Title
      </TableHeadCell>
      <TableHeadCell padding="normal" align="center">
        Editor
      </TableHeadCell>
      <TableHeadCell padding="normal" align="center">
        Category
      </TableHeadCell>
      <TableHeadCell padding="normal" align="center">
        Tags
      </TableHeadCell>
      <TableHeadCell padding="normal" align="center">
        Update
      </TableHeadCell>
      <TableHeadCell padding="normal" align="center">
        Release
      </TableHeadCell>
    </TableRow>
  </TableHead>
))
