/** Adds a random number from a specified range to an initial value. */
export function randomizeValue(value: number, low: number, high: number): number {
    return value + Math.random()*(high-low)+low
}