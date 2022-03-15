import { Table, TableBody, TableContainer, Paper, Box, Toolbar, Typography, Tooltip, IconButton } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { ArticleTableHead } from '../molecules/Table/ArticleTableHead'
import { ArticleTableBody } from '../molecules/Table/ArticleTableBody'

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

export const Article = () => (
  <Box sx={{ width: '100%' }}>
    <TableContainer component={Paper}>
      <Toolbar>
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Articles
        </Typography>
        <Tooltip title="Filter">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <ArticleTableHead />
        <TableBody>
          {datas.map((data) => (
            <ArticleTableBody data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
)
