import { Context, HttpResponseSimple } from "@azure/functions"
import { wait } from "@the-repo/utils"

const start = async (context: Context): Promise<HttpResponseSimple> => {
	context.log("Start: testBlank")

	await wait(1000)

	return {
		headers: {
			"content-type": "application/json"
		},
		statusCode: 200,
		body: {
			invocationId: context.invocationId,
			ts: new Date().toISOString()
		}
	}
}

export default start
