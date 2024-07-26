import { ESLint } from 'eslint'
import express from 'express'
import cors from 'cors'
import axios from 'axios'
import { makeCodeChanges } from './src/controllers/changeController.js'
import { fixCode } from './src/controllers/fixCode.js'
import bodyParser from 'body-parser'

const app = express()

app.use(cors());
app.use(bodyParser.json());
// app.use(express.json())

// app.post('/fixr', async (req, res) => {
//   const eslint = new ESLint()

//   // 2. Lint text.
//   const results = await eslint.lintText(req.body.code);

//   // 3. Format the results.
//   const formatter = await eslint.loadFormatter("stylish");
//   const resultText = formatter.format(results);
//   const fixedCode = await axios.post('https://code-analyzer.onrender.com/fix-code', {
//     code: req.body.code,
//     eslint_output: results,
//     eslint_formatted_results: resultText
//   })

//   if (resultText) {
//     res.status(400)
//   } else {
//     res.status(200)
//   }

//   res.json({
//     eslint_output: results,
//     eslint_formatted_results: resultText,
//     fixed_code: JSON.parse(fixedCode.data.cleanedCode.content[0].text).code
//   })
// })

app.post('/fix-code', fixCode);
app.post('/pull-request', makeCodeChanges);
app.get('/', function(req, res) {
  console.log('works')
  res.send('works')
})
app.listen(3000, () => {
  console.log('Server listening on port: 3000')
})