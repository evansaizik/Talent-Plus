import conference from '../assets/conference.svg';
import audience from '../assets/audience.svg';
import discuss from '../assets/discuss.svg';
import screen from '../assets/screen.svg';
import table from '../assets/table.svg';
import laptop from '../assets/laptop.svg';
import grade from '../assets/grade.svg';
import schedule from '../assets/schedule.svg';
import book from '../assets/menu_book.svg';
import leonard from '../assets/leonard.svg';
import claretta from '../assets/claretta.svg';
import adam from '../assets/adam.svg';
import jeffery from '../assets/jeffery.svg';
import jessica from '../assets/jessica.svg';
import samuel from '../assets/samuel.svg';

const courses = [
  {
    id: 1,
    image: conference,
    specialty: 'Design',
    star: grade,
    ratingsAverage: '4.7k',
    ratings: '(32.7k+)',
    title: 'Introduction to user research in UX Design',
    timeIcon: schedule,
    time: '23hrs 50mins',
    bookIcon: book,
    lesson: '15 Lessons',
    avatar: leonard,
    name: 'Leonard Victor',
    price: '$15.00',
  },
  {
    id: 2,
    image: audience,
    specialty: 'Marketing',
    star: grade,
    ratingsAverage: '4.7k',
    ratings: '(8.7k+)',
    title: 'Introduction to new marketing audience',
    timeIcon: schedule,
    time: '22hrs 30mins',
    bookIcon: book,
    lesson: '22 Lessons',
    avatar: jeffery,
    name: 'Jeffery Williams',
    price: '$32.00',
  },
  {
    id: 3,
    image: discuss,
    specialty: 'Development',
    star: grade,
    ratingsAverage: '4.7k',
    ratings: '(12.7k+)',
    title: 'Introduction to HTML, CSS & bootstrap',
    timeIcon: schedule,
    time: '45hrs 50mins',
    bookIcon: book,
    lesson: '55 Lessons',
    avatar: claretta,
    name: 'Claretta Mason',
    price: '$55.00',
  },
  {
    id: 4,
    image: screen,
    specialty: 'Development',
    star: grade,
    ratingsAverage: '4.7k',
    ratings: '(32.7k+)',
    title: 'Introduction to javascript, Git & Github',
    timeIcon: schedule,
    time: '30hrs 50mins',
    bookIcon: book,
    lesson: '22 Lessons',
    avatar: jessica,
    name: 'Jessica Duke',
    price: '$45.00',
  },
  {
    id: 5,
    image: table,
    specialty: 'Market',
    star: grade,
    ratingsAverage: '4.7k',
    ratings: '(4.7k+)',
    title: 'Introduction to outroom marketing analysis',
    timeIcon: schedule,
    time: '33hrs 50mins',
    bookIcon: book,
    lesson: '26 Lessons',
    avatar: samuel,
    name: 'Samuel Jacobs',
    price: '$25.00',
  },
  {
    id: 6,
    image: laptop,
    specialty: 'Marketing',
    star: grade,
    ratingsAverage: '4.7k',
    ratings: '(15.7k+)',
    title: 'Introduction to live marketing analysis',
    timeIcon: schedule,
    time: '10hrs 50mins',
    bookIcon: book,
    lesson: '32 Lessons',
    avatar: adam,
    name: 'Adam Smith',
    price: '$25.00',
  },
];

export default courses;
