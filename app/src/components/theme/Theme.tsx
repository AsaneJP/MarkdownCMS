import { ReactElement, useEffect, useMemo, VFC } from "react"
import { useRecoilState } from 'recoil'
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material"
import { modeConfigState } from '../../globalState/modeConfig'

type Props = {
  children: ReactElement
}

export const Theme: VFC<Props> = (props) => {
  const { children } = props
  const [modeConfig, setModeConfig] = useRecoilState(modeConfigState)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    setModeConfig(prefersDarkMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDarkMode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: modeConfig ? 'dark' : 'light',
        },
      }),
    [modeConfig]
  )

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
