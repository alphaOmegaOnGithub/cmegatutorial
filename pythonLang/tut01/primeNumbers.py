# Prime Numbers 16/07

def prime(n):
    primes = []
    if n == 1:
        primes = [1]
    if n == 2:
        primes = [1, 2]
    if n > 2:
        primes = [1, 2]
    for i in range(2, n + 1):
        for j in range(2, i):
            if i % j == 0:
                break
            primes.append(i)
            break
    return primes

n = int(input("Insert a number "))
print(prime(n))
