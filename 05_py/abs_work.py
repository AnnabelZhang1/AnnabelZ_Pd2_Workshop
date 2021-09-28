"""
Annabel Zhang
SoftDev
K05 Revising Name Code
2021-09-27
"""

# SUMMARY OF TRIO DISCUSSION
# We helped each other troubleshoot problems of getting the code to run locally.
# DISCOVERIES
# VSC requires a whole path to the file, instead of just allowing "pd1.txt" in the folder
# QUESTIONS
# N/A
# COMMENTS
# N/A


import random

#global variables
pd1 = []
pd2 = []

#takes in a period number input and prints a random "student's" name
def abs_work():
    global pd1, pd2
    period = int(input("Search!\nPeriod Number: "))

    if period == 1:
        check(pd1, 'pd1.txt')

    elif period == 2:
        check(pd2, 'pd2.txt')

    else:
        print("This is not a valid period.")
        abs_work()

#reads in the corresponding list and txt file, and adds to it
#throws error responses if there is no file or if file is empty
def check(list, txt):
    global pd1, pd2
    try:
        with open(txt, 'r') as file:
            for line in file:
                line = line.rstrip('/n')
                list.append(line)
        try:
            rand = random.randint(0, len(list) - 1)
            print(list[rand])
        except:
            print("Text file is empty")
    except:
        print("There is no such file")

abs_work()
