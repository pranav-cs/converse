const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080

app.use(express.static(path.resolve(__dirname, 'client', 'build')))
app.use(express.json())

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.statusStatus(500)
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.js'));
});

app.listen(port, () => {
    console.log(`Express server listening to port ${port}`)
})

module.exports = {
    app
}