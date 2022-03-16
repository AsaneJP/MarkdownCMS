import { memo, VFC } from 'react'
import { TableBodyCell } from '../../atom/Table/TableBodyCell'
import { TableCheckBox } from '../../atom/Table/TableCheckBox'
import { TableRowStyle } from '../../atom/Table/TableRowStyle'

type Props = {
  data: {
    id: string
    name: string
    email: string
    role: string
  }
}

export const UserTableBody: VFC<Props> = memo((props) => {
  const { data } = props
  return (
    <TableRowStyle>
      <>
        <TableCheckBox />
        <TableBodyCell align="left" padding="none">
          {data.name}
        </TableBodyCell>
        <TableBodyCell align="center" padding="normal">
          {data.email}
        </TableBodyCell>
        <TableBodyCell align="center" padding="normal">
          {data.role}
        </TableBodyCell>
      </>
    </TableRowStyle>
  )
})
