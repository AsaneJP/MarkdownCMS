import { Box, IconButton, Paper, Table, TableBody, TableContainer, Toolbar, Tooltip, Typography } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { UserTableBody } from '../molecules/Table/UserTableBody'
import { UserTableHead } from '../molecules/Table/UserTableHead'

function createData(id: string, name: string, email: string, role: string) {
  return { id, name, email, role }
}

const datas = [
  createData('01', 'dev1', 'dev@gmail.com', '管理者'),
  createData('02', 'dev2', 'dev@gmail.com', '管理者'),
  createData('03', 'dev3', 'dev@gmail.com', '投稿者'),
  createData('04', 'dev4', 'dev@gmail.com', '投稿者'),
]

export const User = () => (
  <Box sx={{ width: '100%' }}>
    <TableContainer component={Paper} sx={{ width: '80%', margin: '0 auto', mt: ' 20px' }}>
      <Toolbar>
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Users
        </Typography>
        <Tooltip title="Filter">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <UserTableHead />
        <TableBody>
          {datas.map((data) => (
            <UserTableBody key={data.id} data={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
)
