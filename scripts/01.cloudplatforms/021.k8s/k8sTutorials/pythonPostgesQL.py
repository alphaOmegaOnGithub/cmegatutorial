import psycopg2

try:
    connection = psycopg2.connect(database="catalog",
                        host="192.168.5.5",
                        user="postgres",
                        password="myPassword",
                        port="5432")
    cursor = connection.cursor()
    sql_query = "select * from products"

    cursor.execute(sql_query)
    print("Selecting rows from mobile table using cursor.fetchall")
    product_list = cursor.fetchall()

    print("Print each row and columns data")
    for row in product_list:
        print("Id = ", row[0], )
        print("Name = ", row[1])
        print("Price  = ", row[2], "\n")

except (Exception, psycopg2.Error) as error:
    print("Error while fetching data from PostgreSQL", error)

finally:
    if connection:
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")