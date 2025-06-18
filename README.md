# Tsubame Sanjo Factory Festival Map

An interactive map showing participating factories in the Tsubame Sanjo Factory Festival, with multilingual support (Traditional Chinese, Japanese, English).

## Features

- Interactive map with factory locations
- Multilingual interface (Traditional Chinese, Japanese, English)
- Search functionality for factories
- Responsive design for mobile and desktop
- Factory information display with Google Maps integration

## Technologies Used

- HTML5, CSS3, JavaScript
- Leaflet.js for interactive maps
- Tailwind CSS for styling
- Google Fonts for typography

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. Any push to the main branch will trigger a new deployment.

## Project Structure

```txt
├── index.html              # Main HTML file
├── src/                    # Source code directory
│   ├── css/               # Stylesheets
│   │   └── style.css      # Main CSS file
│   ├── js/                # JavaScript files
│   │   └── app.js         # Main application logic
│   └── data/              # Data files
│       └── factory_data.js # Factory information data
├── package.json           # Project configuration
├── README.md             # Project documentation
└── LICENSE               # License file
```

## Local Development

1. Clone this repository
2. Open `index.html` in a web browser, or
3. Run a local server: `npm run serve` (requires Python 3)

## Data

Factory data is stored in `src/data/factory_data.js` and includes:

- Factory names in multiple languages
- Location coordinates
- Categories and city information
- Google Maps integration links
