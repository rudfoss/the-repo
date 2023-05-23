import path from "node:path"
import chalk from "chalk"
import * as esbuild from "esbuild"
import { haltIf } from "@the-repo/utils"

interface BuildSingleAzFnOptions {
	/**
	 * The folder path that holds the specific Azure Function.
	 */
	azFnFolder: string
	/**
	 * Where to output the folder.
	 */
	outFolder: string
}

export const buildSingleAzFn = async ({
	azFnFolder,
	outFolder
}: BuildSingleAzFnOptions) => {
	const absAzFnFolder = path.resolve(azFnFolder)
	const azFnName = path.dirname(absAzFnFolder)
	console.log(
		chalk.bgBlack.green`Building function "${azFnName}" from "${absAzFnFolder}"`
	)

	invariant()

	esbuild.build
}
