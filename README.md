# PartnerPayz

PartnerPayz is a platform designed to help young couples build meaningful relationships and plan their financial future together.

## Features

- **Partner Finding**: Find compatible partners with shared financial goals and values
- **Financial Planning**: Set and track financial goals together with your partner
- **Relationship Building**: Plan dates and activities that strengthen your bond
- **Community Support**: Connect with other couples on similar journeys

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/partnerpayzs.git
   cd partnerpayzs
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Project Structure

```
partnerpayzs/
├── public/                # Static files
│   ├── index.html         # HTML entry point
│   ├── manifest.json      # Web app manifest
│   └── ...
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Dashboard/     # Dashboard related components
│   │   ├── PartnerFinding/# Partner matching components
│   │   ├── FinancialPlanning/ # Financial tools components
│   │   ├── RelationshipBuilding/ # Relationship tools
│   │   ├── Subscription/  # Pricing and subscription components
│   │   ├── Layout/        # Layout components (Navbar, Footer)
│   │   └── ...
│   ├── styles/            # CSS files
│   │   └── main.css       # Main stylesheet
│   ├── App.jsx            # Main application component
│   └── index.jsx          # Application entry point
└── package.json           # Project dependencies and scripts
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Technology Stack

- **Frontend**: React, React Router
- **Styling**: CSS with variables for theming
- **Charts**: Chart.js with react-chartjs-2

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all contributors who have helped shape PartnerPayz
- Special thanks to our early adopters for valuable feedback 