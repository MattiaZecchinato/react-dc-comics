// comics card
import ComicCard from './ComicsCard.jsx';
// blueList
import BlueList from './BlueList';

import comicsList from '../data/comics.js';

function Main () {

    return (
        <main>
            
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

            {/* blue list */}
            <BlueList />

        </main>
    );
}

export default Main;

