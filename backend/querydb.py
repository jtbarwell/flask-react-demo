import pyodbc
import pandas as pd
import cloudscraper
from bs4 import BeautifulSoup
import time

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



def getBattingDF(url):
    try:
        scraper = cloudscraper.create_scraper(browser={'custom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        response = scraper.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')


        roster_table = soup.find('table', {'id': 'the40man'})
        rows = []
        if roster_table is None:
            print(f"⚠️ No batting table found at {url}")
            with open('batting_debug_output.html', 'w') as f:
                f.write(response.text)
            print(" - Saved HTML to batting_debug_output.html")
            time.sleep(4)
            return pd.DataFrame()

        print("\n✅ Scraping result:")
        df = pd.DataFrame(columns=['Player', 'Pos'])
        for row in roster_table.tbody.find_all('tr'):
            cols = row.find_all('td')
            if cols:
                rows.append({
                    'Player':   cols[1].text.strip("#*").replace("'", "''"),
                    'Pos':      cols[3].text.strip(),
                    'IL':       cols[5].text.strip(),
                    'Age':      cols[6].text.strip()
                })

        df = pd.DataFrame(rows)
        time.sleep(4)
        return df

    except Exception as e:
        print("\n❌ Error during scraping:")
        print(e)
        time.sleep(4)



# print(getBattingDF("https://www.baseball-reference.com/teams/TOR/2025-roster.shtml").to_json(orient='records'))