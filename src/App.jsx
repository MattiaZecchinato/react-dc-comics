// Header
import Header from './components/Header';
// Main
import Main from './components/Main';
// Footer
import Footer from './components/Footer';

function App() {

  // header array props
  const linkListHeader = [
    {
      link: '/',
      title: 'characters'
    },
    {
      link: '/',
      title: 'comics'
    },
    {
      link: '/',
      title: 'movies'
    },
    {
      link: '/',
      title: 'tv'
    },
    {
      link: '/',
      title: 'games'
    },
    {
      link: '/',
      title: 'collectibles'
    },
    {
      link: '/',
      title: 'videos'
    },
    {
      link: '/',
      title: 'fans'
    },
    {
      link: '/',
      title: 'news'
    },
    {
      link: '/',
      title: 'shop'
    }
  ];

  return (
    <>
      <Header list={linkListHeader} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
