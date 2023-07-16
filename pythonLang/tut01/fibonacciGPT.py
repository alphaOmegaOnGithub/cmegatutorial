import matplotlib.pyplot as plt
import timeit

def fibonacci(n):
    if n <= 0:
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
    chkpoint = int(input("Time in between calculations: "))
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

n = int(input("Enter a value for N: "))
plot_time_difference(n)
