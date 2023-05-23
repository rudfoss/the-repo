const start = async () => {
	process.exit(0)
}

start().catch((error) => {
	console.error(error)
	process.exit(1)
})
