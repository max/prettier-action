const path = require('path')
const prettier = require('prettier')

async function main() {
  const file = path.join(__dirname, 'examples/example.md')
  const check = await prettier.format(file, { parser: 'markdown' })
  console.log(check)
}

main()
