import Header from './components/Header';
import Main from './components/Main';
import { Box, Text, Heading } from '@chakra-ui/react';
import Affiliates from './components/Affiliates';
import Course from './components/Course';
import Courses from './components/Courses';
import Browse from './components/Browse';
import Testimony from './components/Testimony';
import Connect from './components/Connect';
import Faq from './components/Faq';
import Footer from './components/Footer';

Text.defaultProps,
  (Heading.defaultProps = {
    fontFamily: 'Clash Display',
  });

function App() {
  return (
    <Box>
      <Header />
      <Main />
      <Affiliates />
      <Courses />
      <Course />
      <Browse />
      <Testimony />
      <Connect />
      <Faq />
      <Footer />
    </Box>
  );
}

export default App;
