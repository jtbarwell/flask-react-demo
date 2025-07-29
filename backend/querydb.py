import pyodbc
import pandas as pd

# server = 'your_server_name'
# database = 'baseball'
# username = 'your_username'
# password = 'your_password'
# driver = '{ODBC Driver 18 for SQL Server}'


def query_to_JSON(server, db, usr, pswd, driver, query):
    connection_string = f'DRIVER={driver};SERVER={server};DATABASE={db};UID={usr};PWD={pswd}'
    with pyodbc.connect(connection_string) as conn:
        resultDF = pd.read_sql(query, conn)
        jsonResult = resultDF.to_json()
    
    return jsonResult