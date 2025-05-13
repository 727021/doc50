import nextra from 'nextra'

const withNextra = nextra({
    codeHighlight: true,
    defaultShowCopyCode: true,
    search: {
      codeblocks: false
    }
})

export default withNextra({
  poweredByHeader: false,
  compress: true
})
