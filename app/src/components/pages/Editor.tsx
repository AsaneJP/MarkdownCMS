import { memo, VFC } from 'react'
import { Box, Typography } from '@mui/material'

export const Editor: VFC = memo(() => (
  <Box>
    <Typography component="h1" variant="h6" color="inherit">
      Editor
    </Typography>
  </Box>
))
