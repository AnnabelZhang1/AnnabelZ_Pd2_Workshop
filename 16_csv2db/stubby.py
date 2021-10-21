#a Python script for interacting with an SQLite db:
import sqlite3 #enable SQLite operations
from csv import DictReader

#open db if exists, otherwise create
#separate file; made connection
db = sqlite3.connect("foo")

c = db.cursor() #facilitate db ops

students = {}
with open('students.csv') as csvfile:
    reader = DictReader(csvfile)
    for row in reader:
        students[row['name']] = [int(row['age']), row['id']]

#create a table with the name student with columns name, age, and id
#TEXT/INTEGER - data type
#the table info is put into foo

c.execute("CREATE TABLE student(name TEXT, age INTEGER, id INTEGER)")
c.execute("CREATE TABLE courses(code TEXT, mark INTEGER, id INTEGER)")


for item in students.items():
    #print(item)
    c.execute("INSERT INTO student VALUES (?, ?, ?)", (item[0], item[1][0], item[1][1]))




#c.execute("SELECT * FROM student")
#print(c.fetchall())

db.commit() #save changes

db.close()
