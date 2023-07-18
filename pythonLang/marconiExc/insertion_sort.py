# Insertion Sort by Mirko Mega 18/07/23

def insertion_sort(values):
    print("Insert 5 values")
    try:    
        for i in range(5):
            n = int(input())
            values.append(n)
        values.sort()
    except:
        print("Insert an integer")
        insertion_sort(values)
    return values

values = []
insertion_sort(values)
print("Sorted values: ", end="")
print(values)