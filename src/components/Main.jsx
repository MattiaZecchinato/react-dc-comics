// comics card
import ComicCard from './ComicsCard.jsx';
// blueList
import BlueList from './BlueList';

import comicsList from '../data/comics.js';

import jumbotron from '../assets/jumbotron.jpg'

function Main () {

    return (
        <main>

            <div className='container-jumbotron'>
                <img src={jumbotron} alt="jumbotron" />
            </div>

            <div className='main-content'>
                <div className='current-series'>current series</div>
                
                <div className='content-box'>
                    {/* paragraph */}
                    <ul className='comics-box'>
                        {comicsList.map((elem, i) => 
                            (<li key={i}>
                                <ComicCard title={elem.title} series={elem.series} img={elem.thumb} />
                            </li>)
                        )}
                    </ul>
                </div>

                <a href='/' className='load-more-btn'>load more</a>
            </div>

            {/* blue list */}
            <BlueList />

        </main>
    );
}

export default Main;

