import { useState } from 'react';
import './app.css';
import { RatingToPoints, PointsToRating } from './components';

function App() {
    const [calculator, setCalculator] = useState('rtp');

    return (
        <div className="app">
            <h1>TBC Season 4 Arena Points Calculator</h1>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => setCalculator('rtp')} className={calculator === 'rtp' ? 'current' : null}>
                            Current Points
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setCalculator('ptr')} className={calculator === 'ptr' ? 'current' : null}>
                            Rating Needed
                        </button>
                    </li>
                </ul>
            </nav>
            {calculator === 'rtp' ? <RatingToPoints /> : <PointsToRating />}
            <aside>
                <em>
                    Special thanks to <a href="https://www.reddit.com/user/Finalbelle">Finalbelle</a> on Reddit for the calculations.<br/>
                    <a href="https://www.reddit.com/r/classicwow/comments/us1cg5/tbc_arena_calculator_formula_updated_for_s4/">Original post can be found here</a>.
                </em>
            </aside>
            <div className="buy-beer-wrapper">
                <a href="http://buymeacoffee.com/safetybelt" className="as-btn">🍺 Buy me a beer</a>
            </div>
        </div>
    );
}

export default App;
