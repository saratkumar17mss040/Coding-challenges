// Array of quotes
const quotes = [
  'The computer was born to solve problems that did not exist before.',
  'Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics;it always increases.',
  'Standards are always out of date.That’s what makes them standards.',
  'Physics is the universe’s operating system.',
  'Imagination is more important than knowledge.For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.',
  'The more you know, the more you realize you know nothing.',
  'Tell me and I forget.Teach me and I remember.Involve me and I learn.',
  'If people never did silly things, nothing intelligent would ever get done.',
  'There is only one problem with common sense; it’s not very common.',
  'If you think you are worth what you know, you are very wrong.Your knowledge today does not have much value beyond a couple of years.Your value is what you can learn and how easily you can adapt to the changes this profession brings so often.',
  'The difference between theory and practice is that in theory, there is no difference between theory and practice.',
  'I think it’s a new feature.Don’t tell anyone it was an accident.',
  'Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’  Now they have two problems.',
];

// function randomQuotes
// @param Array
// @return String
const randomQuotes = (quotes) => quotes[Math.floor(Math.random() * quotes.length)];

console.log('Random quote generator');
console.log(randomQuotes(quotes));
