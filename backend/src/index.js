import express from "express"
import { database } from "./libs/database.js"
import { response } from "./libs/response.js"
import { perusahaan } from "./libs/detail_perusahaan/perusahaan.js"

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('API running.')
})

app.get('/:page', async(req, res) => {
  const db = database()
  const table = 'lowongan_pekerjaan'
  const selectQuery = `
    id,
    judul,
    detail_perusahaan__perusahaan(nama),
    lokasi,
    jenis_pekerjaan_terformat
  `
  const page = parseInt(req.params.page)
  const entryData = 20
  
  const resp = await response(db, table, selectQuery, page, entryData)

  res.send(resp)
})

app.get('/pekerjaan/:idPekerjaan', async(req, res) => {
  const db = database() 

  const getDataFromDB = await db
    .from('lowongan_pekerjaan')
    .select(`
      *,
      detail_perusahaan__perusahaan(id, nama)
    `)
    .eq('id', req.params.idPekerjaan)

  res.send(getDataFromDB.data)
})


app.listen(port, () => {
  console.log('Server running!!!')
})