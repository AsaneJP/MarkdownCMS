import { memo, useCallback, useMemo, useState, VFC } from 'react'
import { Box, IconButton, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { css } from '@emotion/react'
import SimpleMde from 'react-simplemde-editor'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import 'easymde/dist/easymde.min.css'
import 'highlight.js/styles/github.css'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import PreviewIcon from '@mui/icons-material/Preview'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import AddIcon from '@mui/icons-material/Add'

const sanitizer = require('markdown-it-sanitizer')
const emoji = require('markdown-it-emoji')
const footnote = require('markdown-it-footnote')
const mark = require('markdown-it-mark')
const deflist = require('markdown-it-deflist')
const checkbox = require('markdown-it-checkbox')
const sub = require('markdown-it-sub')
const container = require('markdown-it-container')

export const Editor: VFC = memo(() => {
  const [markdown, setMarkdown] = useState<string>('')
  const [preview, setPreview] = useState<boolean>(false)

  const mdOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    }
  }, [])

  const onChangeMarkdown = useCallback(
    (value: string) => {
      setMarkdown(value)
    },
    [setMarkdown]
  )

  const mdParser = new MarkdownIt({
    html: true,
    typographer: true,
    breaks: true,
    linkify: true,
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        }
      }
      return ''
    },
  })

  mdParser
    .use(sanitizer)
    .use(emoji)
    .use(footnote)
    .use(mark)
    .use(deflist)
    .use(checkbox)
    .use(sub)
    .use(container, 'info')
    .use(container, 'success')
    .use(container, 'warning')
    .use(container, 'danger')

  const md = mdParser.render(markdown)

  const handleChange = () => {
    setPreview(!preview)
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', mt: '20px' }}>
      <Box>
        {preview ? (
          <Box dangerouslySetInnerHTML={{ __html: md }} css={previewStyle} />
        ) : (
          <SimpleMde value={markdown} onChange={onChangeMarkdown} options={mdOptions} css={editorStyle} />
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
        <ToggleButtonGroup color="primary" value={preview ? 'preview' : 'edit'} exclusive onChange={handleChange}>
          <ToggleButton value="edit">
            <ModeEditIcon />
          </ToggleButton>
          <ToggleButton value="preview">
            <PreviewIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <IconButton
          color="primary"
          sx={{
            border: 'solid 1px',
            borderRadius: '10px',
            width: '35px',
            height: '35px',
          }}
        >
          <AddIcon />
        </IconButton>
        <IconButton
          color="primary"
          sx={{
            border: 'solid 1px',
            borderRadius: '10px',
            width: '35px',
            height: '35px',
          }}
        >
          <QuestionMarkIcon />
        </IconButton>
      </Box>
    </Box>
  )
})

const editorStyle = css`
  .CodeMirror {
    min-width: 320px;
    max-width: 800px;
    min-height: 600px;
    border: 1px solid black;
    border-radius: 10px;
  }
  .editor-toolbar {
    min-width: 320px;
    background-color: white;
    border-radius: 10px;
    border: solid 1px black;
    margin-bottom: 20px;
  }
`

const previewStyle = css`
  min-width: 320px;
  max-width: 800px;
  min-height: 600px;
  background-color: white;
  color: black;
  border-radius: 10px;
  border: 1px solid black;
`
