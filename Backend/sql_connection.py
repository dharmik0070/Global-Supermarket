import mysql.connector

__cnx = None


def get_mysql_connection():
    global __cnx
    if __cnx is None:
        __cnx = mysql.connector.connect(user='devuser', host='127.0.0.1',
                                        password='12345', database='grocery_store')
    return __cnx
