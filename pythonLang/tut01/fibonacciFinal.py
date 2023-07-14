# Fibonacci sequence 11/07 by Mirko Mega

import matplotlib.pyplot as plt
import timeit

# code
def fibonacci(n):
    if n <= 0:
        print("\n<<Please enter a positive integer.>>")
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        sequence = [0, 1]
        for i in range(2, n):
            sequence.append(sequence[i - 1] + sequence[i - 2])
        return sequence

def plot_time_difference(n):
    times = []
    chkpoint = int(input("<<Time in between calculations>> : "))
    for i in range(1, n + 1):
        if i % chkpoint == 0:
            sequence = fibonacci(i)
            time = timeit.timeit(lambda: fibonacci(i), number=1)
            times.append(time)

    x = range(chkpoint, n + 1, chkpoint)
    plt.plot(x, times, marker='o', linestyle='-', color='red')
    plt.xlabel('Number of Fibonacci Calculations')
    plt.ylabel('Time (seconds)')
    plt.title('Time Difference for Fibonacci Calculations')
    plt.xticks(x)
    plt.grid(True)
    plt.show()

def print_():
    try:
        n = int(input("\n<<How many times do you want to calculate the sequence?>> "))
        plot_time_difference(n) # -2 why 0 & 1 are excluded
        repeat_flag = 1 # checks if you have already executed the code
        request(repeat_flag)
    except:
        print("\n<<Please insert an [integer]>>")
        print_() # print_ function created to work around the problem of requesting execution

def request(repeat_flag):
    accept = ""
    if repeat_flag != 0: # the first time you won't be asked
        accept = str(input("\n<<Do you want to execute the program again? y/n>> "))
    if accept == "y" or accept == "Y" or repeat_flag == 0:
        print_()
    elif accept == "n" or accept == "N" :
        print("\n<<The program won't be executed again.>>")
    else:
        print("\n<<Please define one of the two possible statements.>>")
        request(repeat_flag)

repeat_flag = 0
request(repeat_flag)
