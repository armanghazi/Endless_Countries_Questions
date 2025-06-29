// Utility functions for the quiz application

// Fetch all countries from the API
export const fetchCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,languages,subregion,region');
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

// Generate a random question based on country data
export const generateQuestion = (countries) => {
  // Filter out countries with missing required data
  const validCountries = countries.filter(country => 
    country.name?.common &&
    country.capital?.[0] &&
    country.population &&
    country.flags &&
    country.population &&
    country.languages &&
    country.currencies
  );

  if (validCountries.length < 4) {
    throw new Error('Not enough valid countries to generate questions');
  }

  const questionTypes = [
    'capital',
    'population',
    'region',
    'subregion',
    'languages',
    'currencies'
  ];

  const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
  const correctCountry = validCountries[Math.floor(Math.random() * validCountries.length)];
  const incorrectCountries = validCountries
    .filter(country => country !== correctCountry)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  let question = '';
  let correctAnswer = '';
  let options = [];

  switch (randomType) {
    case 'capital':
      question = `What is the capital of ${correctCountry.name.common}?`;
      correctAnswer = correctCountry.capital[0];
      options = [correctAnswer, ...incorrectCountries.map(country => country.capital[0])];
      break;
    case 'population':
      question = `What is the approximate population of ${correctCountry.name.common}?`;
      correctAnswer = correctCountry.population.toLocaleString();
      options = [correctAnswer, ...incorrectCountries.map(country => country.population.toLocaleString())];
      break;
    case 'region':
      question = `In which region is ${correctCountry.name.common} located?`;
      correctAnswer = correctCountry.region;
      options = [correctAnswer, ...incorrectCountries.map(country => country.region)];
      break;
    case 'subregion':
      question = `In which subregion is ${correctCountry.name.common} located?`;
      correctAnswer = correctCountry.subregion;
      options = [correctAnswer, ...incorrectCountries.map(country => country.subregion)];
      break;
    case 'languages': {
      const languages = Object.values(correctCountry.languages);
      question = `Which of these is an official language of ${correctCountry.name.common}?`;
      correctAnswer = languages[0];
      options = [correctAnswer, ...incorrectCountries.map(country => Object.values(country.languages)[0])];
      break;
    }
    case 'currencies': {
      const currency = Object.values(correctCountry.currencies)[0];
      question = `What is the currency of ${correctCountry.name.common}?`;
      correctAnswer = currency.name;
      options = [correctAnswer, ...incorrectCountries.map(country => Object.values(country.currencies)[0].name)];
      break;
    }
    default:
      throw new Error('Invalid question type');
  }

  // Filter out any undefined options and ensure we have exactly 4 options
  options = options.filter(option => option !== undefined && option !== null);
  if (options.length < 4) {
    // If we don't have enough options, try generating a different question
    return generateQuestion(countries);
  }

  // Shuffle options
  options = options.sort(() => 0.5 - Math.random());

  return {
    question,
    options,
    correctAnswer,
    type: randomType
  };
};

// Generate a set of questions for a quiz part
export const generateQuizPart = async () => {
  const countries = await fetchCountries();
  const questions = [];
  
  for (let i = 0; i < 15; i++) {
    try {
      const question = generateQuestion(countries);
      questions.push(question);
    } catch (error) {
      console.error('Error generating question:', error);
      // If we can't generate a question, try again
      i--;
    }
  }
  
  return questions;
}; 