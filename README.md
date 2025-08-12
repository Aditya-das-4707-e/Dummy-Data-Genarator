# Dummy Data Generator

A simple Node.js and Express web application to generate dummy employee data and store it in a MongoDB database. This project is perfect for developers and testers who need sample data for testing applications, learning MongoDB queries, or experimenting with data-driven features.

## Features

- **Generate Dummy Employee Data:** Quickly create a set of 10 employees with randomized names, salaries, languages, cities, and manager status.
- **MongoDB Integration:** Uses Mongoose ORM to store and manage employee data in a local MongoDB database.
- **Web Interface:** Simple Bootstrap-based front-end with a "Generate Now" button to trigger data generation.
- **EJS Templating:** Renders the web pages using EJS for dynamic content.
- **REST Endpoint:** `/generate` endpoint clears existing employee data and populates the database with new randomized entries.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- EJS (Embedded JavaScript templating)
- Bootstrap 5

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally (`mongodb://127.0.0.1:27017/company`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aditya-das-4707-e/Dummy-Data-Genarator.git
   cd Dummy-Data-Genarator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start your MongoDB instance** (if not already running):
   ```bash
   mongod
   ```

4. **Run the application:**
   ```bash
   node main.js
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Usage

- Click the **"Generate Now"** button on the homepage to delete existing employee records and add 10 new randomly generated employee entries to the database.

## Project Structure

```
├── main.js                 # Main Express server and route handling
├── models/
│   └── Employee.js         # Mongoose schema for Employee
├── views/
│   └── index.ejs           # Main EJS template for the web UI
└── package.json            # Node.js dependencies and scripts
```

## API Endpoints

- `GET /` — Home page.
- `GET /generate` — Generates new dummy employee data in the database.

## Employee Data Schema

Each employee record contains:
- `name` (String)
- `salary` (Number)
- `language` (String)
- `city` (String)
- `isManager` (Boolean)

## Contributing

Contributions are welcome! Please open issues or submit PRs for improvements or bug fixes.

## Author

- [Aditya Das](https://github.com/Aditya-das-4707-e)
