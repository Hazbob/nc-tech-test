import { app } from './server'

const PORT = 9090

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}…`)
})
