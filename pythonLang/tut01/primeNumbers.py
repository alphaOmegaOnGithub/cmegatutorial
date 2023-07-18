# Prime Numbers 16/07

def prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1): # n ** 0.5 non ci sarei arrivato, devo ancora capire perchè
        if n % i == 0:
            return False # nella mia versione vecchia mettevo break
    return True

def print_prime_numbers(limit):
    prime_numbers = []
    for i in range(2, limit + 1):
        if prime(i):
            prime_numbers.append(i)
    print("Prime numbers to ", limit, ":")
    print(prime_numbers)

# Main
limit_num = int(input("Insert a limit number: "))
print_prime_numbers(limit_num)