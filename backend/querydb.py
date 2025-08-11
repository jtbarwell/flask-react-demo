import pyodbc
import pandas as pd
import cloudscraper
from bs4 import BeautifulSoup
import time

# server = 'DESKTOP-IEKNRR8\SQLEXPRESS'
# database = 'baseball'
# driver = '{ODBC Driver 17 for SQL Server}'


def query_to_JSON(server, db, driver, query):
    connection_string = f'Driver={driver};Server={server};Database={db};Trusted_Connection=yes;'
    with pyodbc.connect(connection_string) as conn:
        resultDF = pd.read_sql(query, conn)
        jsonResult = resultDF.to_json()
    
    return jsonResult


def insert_query(server, db, driver, query, params=None):
    connection_string = f'DRIVER={driver};SERVER={server};DATABASE={db};Trusted_Connection=yes;'
    with pyodbc.connect(connection_string) as conn:
        cursor = conn.cursor()
        if params:
            cursor.execute(query, params)
        else:
            cursor.execute(query)
        conn.commit()

        

