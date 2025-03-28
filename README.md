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
- Conta no Firebase

## Installation

1. Clone the repository:
```bash
git clone https://github.com/oswaldoneto/checklist-172.git
```

2. Navigate to the project directory:
```bash
cd checklist-172
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Preview the production build locally:
```bash
npm run preview
```

## Deploying to Firebase

1. Install the Firebase CLI globally:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize the Firebase project (for the first time):
```bash
firebase init hosting
```
- Select the Firebase project
- Use `dist` as the public directory
- Configure as a single-page application (SPA)
- Do not overwrite the existing index.html

4. Deploy:
```bash
firebase deploy
```

The application will be available at:
- https://checklist-172.web.app
- https://checklist-172.firebaseapp.com

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
- GitHub Issues: [Project Issues](https://github.com/oswaldoneto/checklist-172/issues)

## Acknowledgments

- Pilots and instructors who contributed feedback
- Vue.js community
- Cessna 172-S G1000 pilots
