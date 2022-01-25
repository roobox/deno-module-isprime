
export function isPrime(n: number) {

    let checkUntil = Math.floor((n / 2))
    let counter = 2

    while (counter <= checkUntil) {
        if (n % counter === 0) return false

        counter++
    }

    return true
}
