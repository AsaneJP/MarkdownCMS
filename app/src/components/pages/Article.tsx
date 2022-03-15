import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  styled,
  Checkbox,
  Box,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import { TableHeader } from '../molecules/Table/TableHeader';

function createData(
  id: string,
  title: string,
  editor: string,
  category: string,
  tags: string[],
  update: string,
  release: string
) {
  return { id, title, editor, category, tags, update, release }
}

const datas = [
  createData('01', 'Sample1', 'Asane', 'cat1', ['tag1', 'tag2'], '2020/01/01', '2020/01/01'),
  createData('02', 'Sample2', 'Asane', 'cat2', ['tag1', 'tag2'], '2020/01/01', '2020/01/01'),
  createData('03', 'Sample3', 'Asane', 'cat1', ['tag1', 'tag2'], '2020/01/01', '2020/01/01'),
  createData('04', 'Sample4', 'Asane', 'cat2', ['tag1', 'tag2'], '2020/01/01', '2020/01/01'),
  createData('05', 'Sample5', 'Asane', 'cat3', ['tag1', 'tag2'], '2020/01/01', '2020/01/01'),
  createData('06', 'Sample6', 'Asane', 'cat3', ['tag1', 'tag2'], '2020/01/01', '2020/01/01'),
]

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export const Article = () => (
  <Box sx={{ width: '100%' }}>
    <TableContainer component={Paper}>
      <Toolbar>
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Articles
        </Typography>
        <Tooltip title="Filter">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader />
        <TableBody>
          {datas.map((data) => (
            <StyledTableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell padding="checkbox">
                <Checkbox color="primary" />
              </TableCell>
              <TableCell component="th" scope="row" padding="none" align="left">
                {data.title}
              </TableCell>
              <TableCell align="center" padding="normal">
                {data.editor}
              </TableCell>
              <TableCell align="center" padding="normal">
                {data.category}
              </TableCell>
              <TableCell align="center" padding="normal">
                {data.tags}
              </TableCell>
              <TableCell align="center" padding="normal">
                {data.update}
              </TableCell>
              <TableCell align="center" padding="normal">
                {data.release}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
)
