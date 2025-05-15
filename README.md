# Real Estate Data Visualizer

A full-stack web application that allows users to input structured queries to filter real estate data. The app displays the filtered results in a dynamic table and visualizes historical trends using a line chart.

## Features

-  Query-based data filtering via backend
-  A short natural language summary (mocked)
-  Line chart visualization of trends (e.g., average flat rate per year)
-  Tabular view of filtered results
-  Option to download table data as CSV
-  Minimal, clean UI with responsive design

## Tech Stack

### Frontend
- React.js
- Chart.js (via `react-chartjs-2`)
- Basic CSS

### Backend
- Django
- Django REST Framework
- Pandas (for data analysis)

### Prerequisites
- Python
- React

## Setup & Installation

### Backend  

First create and activate the virtual environment (windows)
```bash
python -m venv env
env\Scripts\activate
```

Install dependencies and run the Django server
```bash
pip install django djangorestframework pandas openpyxl
cd chatbot_backend
python manage.py migrate
python manage.py runserver
```
### Frontend  
Go to the root folder 
```bash
npm install
npm start
```

## Screenshots
![ss1](https://github.com/user-attachments/assets/abd7b8f0-f597-4b18-b927-aed7e911d043)
![ss2](https://github.com/user-attachments/assets/b0706e61-2c47-424f-a7af-20206888dcfa)
![ss3](https://github.com/user-attachments/assets/259ba35d-c6a9-4bc9-a789-09446b355b31)


## Api Endpoints
### POST `/analyze`
Submits a query string and returns filtered table data along with chart data.

####  Request Body

```json
{
  "query": "Analyze wakad"
}
```
#### Response

```json
{
    "summary": "Wakad has a total of 20037 units sold with ₹9,676 as avg flat price and 165975916891 in total IGR sales.",
    "chartData": [
        {
            "year": 2020,
            "avg_flat_rate": 9116.946698520345
        },
        {
            "year": 2021,
            "avg_flat_rate": 9289.038931398418
        },
        {
            "year": 2022,
            "avg_flat_rate": 9734.906578864848
        },
        {
            "year": 2023,
            "avg_flat_rate": 9959.56636540962
        },
        {
            "year": 2024,
            "avg_flat_rate": 10277.82582611386
        }
    ],
    "tableData": [
        {
            "final location": "Wakad",
            "year": 2020,
            "city": "Pune",
            "loc_lat": 18.597268642605,
            "loc_lng": 73.7626955694936,
            "total_sales - igr": 20983019240.0,
            "total sold - igr": 3521,
            "flat_sold - igr": 3244,
            "office_sold - igr": 139,
            "others_sold - igr": 29,
            "shop_sold - igr": 109,
            "commercial_sold - igr": 249,
            "other_sold - igr": 8.0,
            "residential_sold - igr": 3264,
            "flat - weighted average rate": 9116.946698520345,
            "office - weighted average rate": 11083.53633093525,
            "others - weighted average rate": 8302.806551724138,
            "shop - weighted average rate": 13904.59321100917,
            "flat - most prevailing rate - range": "10373-11465",
            "office - most prevailing rate - range": "13237-14630",
            "others - most prevailing rate - range": "9526-10528",
            "shop - most prevailing rate - range": "18241-20161",
            "total units": 4325,
            "total carpet area supplied (sqft)": 2590224.09516,
            "flat total": 3310,
            "shop total": 285,
            "office total": 235,
            "others total": 495
        },
        {
            "final location": "Wakad",
            "year": 2021,
            "city": "Pune",
            "loc_lat": 18.597268642605,
            "loc_lng": 73.7626955694936,
            "total_sales - igr": 30257038927.0,
            "total sold - igr": 5262,
            "flat_sold - igr": 4548,
            "office_sold - igr": 132,
            "others_sold - igr": 445,
            "shop_sold - igr": 137,
            "commercial_sold - igr": 669,
            "other_sold - igr": 12.0,
            "residential_sold - igr": 4581,
            "flat - weighted average rate": 9289.038931398418,
            "office - weighted average rate": 12588.72007575758,
            "others - weighted average rate": 11690.6593258427,
            "shop - weighted average rate": 13989.81197080292,
            "flat - most prevailing rate - range": "10323-11410",
            "office - most prevailing rate - range": "13493-14913",
            "others - most prevailing rate - range": "12202-13486",
            "shop - most prevailing rate - range": "17925-19812",
            "total units": 5030,
            "total carpet area supplied (sqft)": 3197303.89992,
            "flat total": 4284,
            "shop total": 178,
            "office total": 109,
            "others total": 459
        },
        {
            "final location": "Wakad",
            "year": 2022,
            "city": "Pune",
            "loc_lat": 18.597268642605,
            "loc_lng": 73.7626955694936,
            "total_sales - igr": 46914473973.276,
            "total sold - igr": 6944,
            "flat_sold - igr": 6378,
            "office_sold - igr": 235,
            "others_sold - igr": 87,
            "shop_sold - igr": 244,
            "commercial_sold - igr": 495,
            "other_sold - igr": 7.0,
            "residential_sold - igr": 6442,
            "flat - weighted average rate": 9734.906578864848,
            "office - weighted average rate": 11746.56736170213,
            "others - weighted average rate": 11139.27,
            "shop - weighted average rate": 14447.91155737705,
            "flat - most prevailing rate - range": "10493-11597",
            "office - most prevailing rate - range": "13269-14666",
            "others - most prevailing rate - range": "12706-14043",
            "shop - most prevailing rate - range": "19844-21933",
            "total units": 4397,
            "total carpet area supplied (sqft)": 3479663.85624,
            "flat total": 4220,
            "shop total": 48,
            "office total": 68,
            "others total": 61
        },
        {
            "final location": "Wakad",
            "year": 2023,
            "city": "Pune",
            "loc_lat": 18.597268642605,
            "loc_lng": 73.7626955694936,
            "total_sales - igr": 38810863644.0,
            "total sold - igr": 5484,
            "flat_sold - igr": 4614,
            "office_sold - igr": 234,
            "others_sold - igr": 479,
            "shop_sold - igr": 157,
            "commercial_sold - igr": 839,
            "other_sold - igr": 5.0,
            "residential_sold - igr": 4640,
            "flat - weighted average rate": 9959.56636540962,
            "office - weighted average rate": 12505.96247863248,
            "others - weighted average rate": 15267.09135699374,
            "shop - weighted average rate": 17318.12082802548,
            "flat - most prevailing rate - range": "10479-11582",
            "office - most prevailing rate - range": "14423-15942",
            "others - most prevailing rate - range": "15948-17627",
            "shop - most prevailing rate - range": "21899-24204",
            "total units": 4471,
            "total carpet area supplied (sqft)": 3264490.20456,
            "flat total": 3407,
            "shop total": 101,
            "office total": 64,
            "others total": 899
        },
        {
            "final location": "Wakad",
            "year": 2024,
            "city": "Pune",
            "loc_lat": 18.597268642605,
            "loc_lng": 73.7626955694936,
            "total_sales - igr": 29010521107.4,
            "total sold - igr": 3760,
            "flat_sold - igr": 3232,
            "office_sold - igr": 286,
            "others_sold - igr": 59,
            "shop_sold - igr": 183,
            "commercial_sold - igr": 501,
            "other_sold - igr": 12.0,
            "residential_sold - igr": 3247,
            "flat - weighted average rate": 10277.82582611386,
            "office - weighted average rate": 14213.31552447553,
            "others - weighted average rate": 11367.0493220339,
            "shop - weighted average rate": 17000.27950819672,
            "flat - most prevailing rate - range": "11032-12194",
            "office - most prevailing rate - range": "16167-17869",
            "others - most prevailing rate - range": "15075-16662",
            "shop - most prevailing rate - range": "20786-22974",
            "total units": 1814,
            "total carpet area supplied (sqft)": 1419304.22712,
            "flat total": 1465,
            "shop total": 57,
            "office total": 187,
            "others total": 105
        }
    ]
}
```



