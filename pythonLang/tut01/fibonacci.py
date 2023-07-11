#Fibonacci sequence 11/07

import time
#code
def fibonacci_of(n):
    if n <= 0:
        print("Please enter a positive integer.")
    n1, n2 = 0, 1
    tic = time.perf_counter()
    for i in range(n + 1):
       #if i == 0:
            #print(0)
        fibnum = n1 + n2
        #print(fibnum)
        n1 = n2
        n2 = fibnum
    toc = time.perf_counter()
    print(f"Last number = {fibnum}") # print only last number to make calculations faster
    print(f"Code executed in {toc - tic:0.4f} seconds")

#reqeust
n = int(input("Quante volte si vuole calcolare?: "))
fibonacci_of(n - 2) # -2 why 0 & 1 are excluded
