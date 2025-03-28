# C172-S G1000 Checklist

An interactive checklist web application for the Cessna 172S with G1000 avionics. This application helps pilots go through their checklists efficiently with a modern, easy-to-use interface.

![C172-S G1000 Checklist](screenshot.png)

## Features

- ✈️ Complete C172-S G1000 checklist
- 🔍 Phase-by-phase checklist organization
- ✅ Interactive checkmarks with visual feedback
- 🌙 Dark mode interface
- 📱 Responsive design for all devices
- 🔄 Reset functionality
- ⚡ Fast and lightweight

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/checklist-172.git
```

2. Navigate to the project directory:
```bash
cd checklist-172
```

3. Install dependencies:
```bash
npm install
```

## Development

To run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Preview the production build locally:
```bash
npm run preview
```

## Deployment

The project is built using Vite and can be deployed to various platforms:

### Static Hosting (Recommended)
After running `npm run build`, deploy the contents of the `dist` folder to any static hosting service like:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

### Example: Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Enable GitHub Pages in your repository settings
4. Set the build directory as the source

## Project Structure

```
checklist-172/
├── src/
│   ├── components/
│   │   └── Checklist.vue
│   ├── data/
│   │   └── checklist.js
│   ├── App.vue
│   └── main.js
├── public/
│   └── favicon.png
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- Vue.js 3
- Vite
- JavaScript (ES6+)
- CSS3

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Credits

This project was created by [@simmerlabs](https://www.youtube.com/@simmerlabs)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Support

For support, please visit:
- YouTube Channel: [@simmerlabs](https://www.youtube.com/@simmerlabs)
- GitHub Issues: [Project Issues](https://github.com/yourusername/checklist-172/issues)
