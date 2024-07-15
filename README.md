# Real-Time Stock/Crypto Price Dashboard

This project is a mini-website to collect and display real-time price data for stocks and cryptocurrencies. The backend polls real-time data from an external API and stores it in a MongoDB database, while the frontend fetches this data and displays it in a dynamic table.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Features

- Poll real-time data every few seconds for 5 stocks or cryptocurrencies from an external API.
- Store the data in a MongoDB database.
- Fetch and display the most recent 20 entries for a particular stock or cryptocurrency.
- Dynamic table updates with real-time data.
- Modal/popup to change the stock or cryptocurrency.

## Technologies

- **Backend**: Node.js, Express, TypeScript, MongoDB, Mongoose, node-cron, dotenv
- **Frontend**: Next.js, React, TypeScript, Redux Toolkit, redux-persist, Axios, Tailwind CSS

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tamendra/crypto-project.git
   cd crypto-project

2. **Install dependencies for both frontend and backend:**

Install backend dependencies

   ```
   cd stock-price-backend-service
   npm install
   ```

Install frontend dependencies

   ```
   cd ../stock-price-frontend
   npm install
   ```


3. **Set up environment variables:**

   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/stock_price_db
   ```

## Usage

1. **Start the backend server:**

   ```bash
   cd stock-price-backend-service
   npm run dev
   ```

2. **Start the frontend server:**

   ```
   cd ../stock-price-frontend
   npm run dev
   ```


3. **Open browser and navigate to:**

   http://localhost:3000

## Project Structure
```
crypto-project/
├── stock-price-backend-service/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── dataController.ts
│   │   ├── models/
│   │   │   └── PriceData.ts
│   │   │   └── ErrorModel.ts
│   │   │   └── index.ts
│   │   ├── routes/
│   │   │   └── dataRoutes.ts
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   └── app.ts
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── tsconfig.json
├── stock-price-frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── favicon.ico
│   │   │   └── gloabls.css
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   └── DataTable.tsx
│   │   ├── pages/
│   │   │   ├── _app.tsx
│   │   │   └── index.tsx
│   │   |   ├── api/
│   │   │   |   └── [symbol].tsx
│   │   ├── store/
│   │   │   ├── dataSlice.ts
│   │   │   └── store.ts
│   ├── public/
│   ├── styles/
│   ├── .env.local
│   ├── package.json
│   └── tsconfig.json
```

## API Endpoints

**Backend API**

GET `/api/data/:symbol`: Fetch the most recent 20 entries for the specified stock or cryptocurrency symbol.


*Example Request*
```
GET http://localhost:5000/api/data/BTC
```

   


