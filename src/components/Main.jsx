// blueList
import BlueList from './BlueList';

const paragraphText = '--> Content goes here <--';

function Main () {

    return (
        <main>
            
            <div className='content-box'>
                {/* paragraph */}
                <p>
                    {paragraphText}
                </p>
            </div>

            {/* blue list */}
            <BlueList />

        </main>
    );
}

export default Main;

