import chalk from "chalk"

/**
 * Halts program and exits with an error code if the condition is false.
 */
export const haltIf = (
	condition: boolean,
	text: string,
	exitCodeIfHalt = 1
) => {
	if (!condition) {
		console.error(chalk.bold.red(text))
		process.exit(exitCodeIfHalt)
	}
}
