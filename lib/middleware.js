export default async function (req, res, next) {
    console.log(`${req.method} ${req.url}`)
    const start = Date.now()

    res.on('finish', () => {
        const duration = Date.now() - start
        console.log(`${res.statusCode} ${res.statusMessage}; ${duration}ms`)
    })

    next()
}