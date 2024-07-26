import { ESLint } from 'eslint'
import express from 'express'
import cors from 'cors'
import axios from 'axios'
import {
  makeCodeChanges,
  readCode,
} from "./src/controllers/changeController.js";
import { fixCode } from './src/controllers/fixCode.js'
import bodyParser from 'body-parser'

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.post('/fix-code', fixCode);
app.post('/pull-request', makeCodeChanges);
app.get('/', function(req, res) {
  console.log('works')
  res.send('works')
})
app.post("/read-code", readCode);

app.listen(3000, () => {
  console.log('Server listening on port: 3000')
})