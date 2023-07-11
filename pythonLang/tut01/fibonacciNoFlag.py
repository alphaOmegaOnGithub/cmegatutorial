# Fibonacci sequence 11/07 by Mirko Mega

import time
# code
def fibonacci_of(n):
    if n <= 0:
        print("\n<<Please enter a [positive integer].>>")
    n1, n2 = 0, 1
    tic = time.perf_counter()
    for i in range(n + 1):
       #if i == 0: # excluded to print only the final Fibonacci num
            #print(0)
        fibnum = n1 + n2
        #print(fibnum) #
        n1 = n2
        n2 = fibnum
    toc = time.perf_counter()
    time = tic - toc
    print(f"\n<<Last number>> = {fibnum}") # print only last number to make calculations faster
    print(f"\n<<Code executed in {time:0.5f} seconds>>")

def print_():
     try:
        n = int(input("\n<<How many times do you want to calculate the sequence?>>: "))
        fibonacci_of(n - 2) # -2 why 0 & 1 are excluded
        repeat_flag = 1 # checks if you have already executed the code
        request()
     except:
        print("\n<<Please insert an [integer]>>")
        print_() # print_ function created to work around the problem of requesting execution

def request():
    accept = str(input("\n<<Do you want to execute the program? y/n -> "))
    if accept == "y":
        print_()
    elif accept == "n":
        print("\n<<The program won't be executed.>>")
    else:
        print("\n<<Please define one of the two possible statements.>>")
        request()

request()
