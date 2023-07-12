# Fibonacci sequence 11/07 by Mirko Mega

import time
# code
def fibonacci_of(n):
    if n <= 0:
        print("\n<<Please enter a positive integer.>>")
    n1, n2 = 0, 1
    tic = time.perf_counter()
    for i in range(n + 1):
       #if i == 0: # excluded to print only the final Fibonacci num
            #print(0)
        fibnum = n1 + n2
        #print(fibnum) # excluded to print only the final Fibonacci num
        n1 = n2
        n2 = fibnum
    toc = time.perf_counter()
    print(f"\nLast number = {fibnum}") # print only last number to make calculations faster
    print(f"\n<<Code executed in {toc - tic:0.5f} seconds>>")

def print_():
    try:
        n = int(input("\n<<How many times do you want to calculate the sequence?>>: "))
        fibonacci_of(n - 2) # -2 why 0 & 1 are excluded
        repeat_flag = 1 # checks if you have already executed the code
        request(repeat_flag)
    except:
        print("\n<<Please insert an [integer]>>")
        print_() # print_ function created to work around the problem of requesting execution

def request(repeat_flag):
    accept = ""
    if repeat_flag != 0: # the first time you won't be asked
        accept = str(input("\n<<Do you want to execute the program again? y/n>> -> "))
    if accept == "y" or accept == "Y" or repeat_flag == 0:
        print_()
    elif accept == "n" or accept == "N" :
        print("\n<<The program won't be executed again.>>")
    else:
        print("\n<<Please define one of the two possible statements.>>")
        request(repeat_flag)

repeat_flag = 0
request(repeat_flag)
