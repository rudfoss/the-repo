type CancellablePromise<T> = Promise<T> & {
	cancel: () => void
}

/**
 * Returns a promise that resovles after the given number of milliseconds with an optional value.
 */
export const wait = <T = undefined>(
	durationMs: number,
	resolveWith?: T
): CancellablePromise<T> => {
	let timeoutId: ReturnType<typeof setTimeout>
	const promise: Partial<CancellablePromise<T>> = new Promise<T>((resolve) => {
		timeoutId = setTimeout(() => resolve(resolveWith as never), durationMs)
	})
	promise.cancel = () => {
		clearTimeout(timeoutId)
	}

	return promise as CancellablePromise<T>
}
