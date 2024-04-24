import express from 'express'
import serveStatic from 'serve-static'
import path from 'path'

const app = express()

// Utilisation de serveStatic pour servir les fichiers statiques depuis le répertoire 'dist'
app.use(serveStatic(path.join(__dirname, 'dist')))

// Port pour le serveur Express
const port = process.env.PORT || 3000

// Démarrer le serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`)
})
