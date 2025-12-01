import express from "express"
import next from "next"

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()
const PORT = 3000

// твои кастомные маршруты express
server.get("/explore", (req, res) => {
  console.log(req.url)
  res.send("ok")
})

// подключаем Next.js на все остальные пути
app.prepare().then(() => {
  server.all("/", (req, res) => handle(req, res))

  server.listen(PORT, () => {
    console.log("server was deployed successful here: " + PORT)
  })
})
