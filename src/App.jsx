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

  // footer array props

  // dc comics
  const linkDcComicsFooter = [
    {
      link: '',
      title: 'dc comics'
    },
    {
      link: '/',
      title: 'Characters'
    },
    {
      link: '/',
      title: 'Comics'
    },
    {
      link: '/',
      title: 'Movies'
    },
    {
      link: '/',
      title: 'TV'
    },
    {
      link: '/',
      title: 'Games'
    },
    {
      link: '/',
      title: 'Videos'
    },
    {
      link: '/',
      title: 'News'
    }
  ]

  // shop
  const linkShopFooter = [
    {
      link: '',
      title: 'shop'
    },
    {
      link: '/',
      title: 'Shop DC'
    },
    {
      link: '/',
      title: 'Shop DC Collectibles'
    }
  ]

  // shop
  const linkDcFooter = [
    {
      link: '',
      title: 'dc'
    },
    {
      link: '/',
      title: 'Term Of Use'
    },
    {
      link: '/',
      title: 'Privicy policy (New)'
    },
    {
      link: '/',
      title: 'Ad Choices'
    },
    {
      link: '/',
      title: 'Advertising'
    },
    {
      link: '/',
      title: 'Jobs'
    },
    {
      link: '/',
      title: 'Subscriptions'
    },
    {
      link: '/',
      title: 'Talent Workshop'
    },
    {
      link: '/',
      title: 'CPSC Certificates'
    },
    {
      link: '/',
      title: 'Ratings'
    },
    {
      link: '/',
      title: 'Shop Help'
    },
    {
      link: '/',
      title: 'Contact Us'
    }
  ]

  const linkSitesFooter = [
    {
      link: '',
      title: 'sites'
    },
    {
      link: '/',
      title: 'DC'
    },
    {
      link: '/',
      title: 'MAD Magazine'
    },
    {
      link: '/',
      title: 'DC Kids'
    },
    {
      link: '/',
      title: 'DC Universe'
    },
    {
      link: '/',
      title: 'DC Power Visa'
    }
  ]

  return (
    <>
      <Header list={linkListHeader} />
      <Main />
      <Footer dcComics={linkDcComicsFooter} shop={linkShopFooter} dc={linkDcFooter} sites={linkSitesFooter}/>
    </>
  );
}

export default App;
