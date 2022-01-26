export function isPrime(number: number): boolean {
    if (number <= 1) {
        return false
    } else if (number == 2) {
        return true
    } else {
        for (let i = 2; i <= Math.ceil(number ** 0.5); i++) {
            if (number % i == 0) {
                return false
            }
        }
        return true
    }
}