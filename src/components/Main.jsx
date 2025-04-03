// blueList
import BlueList from './BlueList';

const paragraphText = '--> Content goes here <--';

function Main () {

    return (
        <main>
            
            {/* paragraph */}
            <p>
                {paragraphText}
            </p>

            {/* blue list */}
            <BlueList />

        </main>
    );
}

export default Main;

