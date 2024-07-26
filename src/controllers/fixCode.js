import { ESLint } from 'eslint'
import axios from 'axios'

export const fixCode = async (req, res) => {
  const eslint = new ESLint()

  // 2. Lint text.
  const results = await eslint.lintText(req.body.code);

  // 3. Format the results.
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);
  console.log('Linting done')
  const fixedCode = await axios.post('https://code-analyzer.onrender.com/fix-code', {
    code: req.body.code,
    eslint_output: results,
    eslint_formatted_results: resultText
  })
  console.log('file changes done')

  if (resultText) {
    res.status(400)
  } else {
    res.status(200)
  }

  res.json({
    eslint_output: results,
    eslint_formatted_results: resultText,
    fixed_code: fixedCode.data.cleanedCode.content[0].text
  })
};