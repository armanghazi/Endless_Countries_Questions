# 🌍 Endless Countries Questions

An interactive geography quiz application that tests your knowledge about countries around the world. Challenge yourself with endless questions about capitals, populations, regions, languages, and currencies!

## ✨ Features

- **Endless Questions**: Generate unlimited quiz questions about countries
- **Multiple Question Types**: Test knowledge on:
  - Capital cities
  - Population numbers
  - Geographic regions and subregions
  - Official languages
  - National currencies
- **Real-time Scoring**: Track your progress as you answer questions
- **Performance Rating**: Get feedback based on your score:
  - **15 points**: You have unbelievable information! 🌟
  - **12-14 points**: GREAT! 🎉
  - **8-11 points**: Good job! 👍
  - **4-7 points**: OK 👌
  - **0-3 points**: You must read geography again! 📚
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Live Data**: Uses the REST Countries API for up-to-date country information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/armanghazi/Endless_Countries_Questions.git
   cd endless-countries-questions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `https://armanghazi.github.io/Endless_Countries_Questions`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with modern design patterns
- **Icons**: React Icons
- **API**: REST Countries API (https://restcountries.com)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Quiz.jsx        # Main quiz component
│   ├── Question.jsx    # Individual question component
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Footer component
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact page
├── utils/
│   └── quizUtils.js    # Quiz logic and API functions
├── assets/             # Static assets
├── App.jsx             # Main app component
├── App.css             # Global styles
└── main.jsx            # App entry point
```

## 🎯 How It Works

1. **Question Generation**: The app fetches country data from the REST Countries API and generates random questions covering different aspects of geography.

2. **Quiz Flow**: 
   - Each quiz consists of 15 questions
   - Questions are presented one at a time
   - Users select from 4 multiple-choice options
   - Immediate feedback shows correct/incorrect answers
   - Score is tracked throughout the quiz

3. **Scoring System**: 
   - Each correct answer adds 1 point
   - Final score is rated on a 15-point scale
   - Performance feedback is provided based on score ranges

## 🌐 API Integration

The application uses the [REST Countries API](https://restcountries.com) to fetch:
- Country names and capitals
- Population data
- Geographic regions and subregions
- Official languages
- National currencies
- Country flags

## 🎨 Design Features

- **Clean, Modern UI**: Minimalist design with focus on usability
- **Responsive Layout**: Adapts to different screen sizes
- **Visual Feedback**: Color-coded answers (green for correct, red for incorrect)
- **Smooth Animations**: Transitions and hover effects
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com) for providing comprehensive country data
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icons

## 📞 Contact

If you have any questions or suggestions, please feel free to reach out:
- **Portfolio**: [https://armanghazi.github.io/portfolio](https://armanghazi.github.io/portfolio)
- **Email**: ghaziaskari@gmail.com
- **GitHub**: [@armanghazi](https://github.com/armanghazi)
- **Project Link**: [https://armanghazi.github.io/Endless_Countries_Questions](https://armanghazi.github.io/Endless_Countries_Questions)

---

**Happy Learning! 🌍📚**
