import { styled, TableRow } from '@mui/material'
import { memo, ReactElement, VFC } from 'react'

type Props = {
  children: ReactElement
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export const TableRowStyle: VFC<Props> = memo((props) => {
  const { children } = props
  return <StyledTableRow>{children}</StyledTableRow>
})
