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


        roster_table = soup.find('table', {'id': 'players_standard_batting'})
        rows = []
        if roster_table is None:
            print(f"⚠️ No batting table found at {url}")
            with open('batting_debug_output.html', 'w') as f:
                f.write(response.text)
            print(" - Saved HTML to batting_debug_output.html")
            time.sleep(4)
            return pd.DataFrame()

        print("\n✅ Scraping result:")
        df = pd.DataFrame(columns=['Player', 'Age', 'Pos', 'WAR', 'G', 'PA', 'AB', 'R', 'H', '[2B]', '[3B]', 'HR', 'RBI', 'SB', 'CS', 'BB', 'SO', 'BA', 'OBP', 'SLG', 'OPS', '[OPS+]', 'rOBA', '[Rbat+]', 'TB', 'GIDP', 'HBP', 'SH', 'SF', 'IBB'])
        for row in roster_table.tbody.find_all('tr'):
            cols = row.find_all('td')
            if cols:
                rows.append({
                    'Player':   cols[0].text.strip("#*").replace("'", "''"),
                    'Age':      cols[1].text.strip(),
                    'Pos':      cols[2].text.strip("#*"),
                    'WAR':      cols[3].text.strip(),
                    'G':        cols[4].text.strip(),
                    'PA':       cols[5].text.strip(),
                    'AB':       cols[6].text.strip(),
                    'R':        cols[7].text.strip(),
                    'H':        cols[8].text.strip(),
                    '[2B]':     cols[9].text.strip(),
                    '[3B]':     cols[10].text.strip(),
                    'HR':       cols[11].text.strip(),
                    'RBI':      cols[12].text.strip(),
                    'SB':       cols[13].text.strip(),
                    'CS':       cols[14].text.strip(),
                    'BB':       cols[15].text.strip(),
                    'SO':       cols[16].text.strip(),
                    'BA':       cols[17].text.strip(),
                    'OBP':      cols[18].text.strip(),
                    'SLG':      cols[19].text.strip(),
                    'OPS':      cols[20].text.strip(),
                    '[OPS+]':   cols[21].text.strip(),
                    'rOBA':     cols[22].text.strip(),
                    '[Rbat+]':  cols[23].text.strip(),
                    'TB':       cols[24].text.strip(),
                    'GIDP':     cols[25].text.strip(),
                    'HBP':      cols[26].text.strip(),
                    'SH':       cols[27].text.strip(),
                    'SF':       cols[28].text.strip(),
                    'IBB':      cols[29].text.strip()
                })

        df = pd.DataFrame(rows)
        time.sleep(4)
        return df

    except Exception as e:
        print("\n❌ Error during scraping:")
        print(e)
        time.sleep(4)



# print(getBattingDF("https://www.baseball-reference.com/teams/TOR/2025.shtml").to_json(orient='records'))