import { memo, VFC } from 'react'
import { TableBodyCell } from '../../atom/Table/TableBodyCell'
import { TableCheckBox } from '../../atom/Table/TableCheckBox'
import { TableRowStyle } from '../../atom/Table/TableRowStyle'

type Props = {
  data: {
    id: string
    title: string
    editor: string
    category: string
    tags: string[]
    update: string
    release: string
  }
}

export const ArticleTableBody: VFC<Props> = memo((props) => {
  const { data } = props
  return (
    <TableRowStyle>
      <>
        <TableCheckBox />
        <TableBodyCell align="left" padding="none">
          {data.title}
        </TableBodyCell>
        <TableBodyCell align="center" padding="normal">
          {data.editor}
        </TableBodyCell>
        <TableBodyCell align="center" padding="normal">
          {data.category}
        </TableBodyCell>
        <TableBodyCell align="center" padding="normal">
          {data.tags.join(', ')}
        </TableBodyCell>
        <TableBodyCell align="center" padding="normal">
          {data.update}
        </TableBodyCell>
        <TableBodyCell align="center" padding="normal">
          {data.release}
        </TableBodyCell>
      </>
    </TableRowStyle>
  )
})
