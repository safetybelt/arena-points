import { useState } from 'react';
import './app.css';
import { RatingToPoints, PointsToRating } from './components';

function App() {
    const [calculator, setCalculator] = useState('rtp');

    return (
        <div className="app">
            <h1>
                Wrath of the Lich King Classic:<br />
                Arena Points Calculator
            </h1>
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
                <p>
                    If you received a different number of points than expected, please fill out <a href="https://forms.gle/yhgaF9uUvdsuFKhQ9">this form</a> to help us fix any inconsistencies in the calculator.
                </p>
                <p>
                    <em>
                        Special thanks to <a href="https://www.reddit.com/user/Finalbelle">Finalbelle</a> on Reddit for the calculations.<br/>
                        <a href="https://www.reddit.com/r/classicwow/comments/us1cg5/tbc_arena_calculator_formula_updated_for_s4/">Original post can be found here</a>.
                    </em>
                </p>
            </aside>
            <div className="buy-beer-wrapper">
                <a href="http://buymeacoffee.com/safetybelt" className="as-btn">🍺 Buy me a beer</a>
            </div>
        </div>
    );
}

export default App;
