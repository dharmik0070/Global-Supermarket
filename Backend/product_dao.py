from sql_connection import get_mysql_connection


def get_all_products(connection):
    cursor = connection.cursor()
    query = "select product_id, name, uom_name, price_per_unit,u.uom_id from products p inner join uom u on u.uom_id = p.uom_id order by product_id;"
    cursor.execute(query)
    response = []
    for (product_id, name, uom_name, price_per_unit,uom_id) in cursor:
        response.append(
            {
                'product_id': product_id,
                'name': name,
                'uom_name': uom_name,
                'price_per_unit': price_per_unit,
                'uom_id': uom_id
            }
        )
    return response


def insert_new_product(connection, product):
    cursor = connection.cursor()
    query = ("insert into products (name,uom_id, price_per_unit) values (%s,%s,%s)")
    data = (product['product_name'], product['uom_id'], product['price_per_unit'])
    cursor.execute(query, data)
    connection.commit()
    return cursor.lastrowid


def edit_product(connection, product_name):
    cursor = connection.cursor()
    # update products set name='Wheat Flour', uom_id = 1, price_per_unit=30 where product_id = 3;
    query = ("update products set name = '" + str(product_name['product_name']) + "', price_per_unit = " + str(
        product_name['price_per_unit']) + ", uom_id = " + str(product_name['uom_id']) + " where product_id = " + str(
        product_name['id']))
    cursor.execute(query)
    connection.commit()


def delete_product(connection, product_id):
    cursor = connection.cursor()
    query = "delete from products where product_id = " + str(product_id)
    cursor.execute(query)
    connection.commit()


if __name__ == '__main__':
    connection = get_mysql_connection()
    print(get_all_products(connection))
    # print(edit_product(connection, {
    #     'product_name': 'Rice',
    #     'price_per_unit': 55,
    #     'uom_id': 1,
    #     'product_id': 11
    # }))
    # print(get_all_products(connection))

    # print(insert_new_product(connection,
    #                          {
    #                              'product_name': 'Bread',
    #                              'uom_id': '2',
    #                              'price_per_unit': 50
    #                          }))
    # print(delete_product(connection,'9'))
