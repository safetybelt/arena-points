import { useState } from 'react';
import './app.css';
import { calculatePoints } from './utils';

function App() {
    const [rating, setRating] = useState(0);
    const [bracket, setBracket] = useState(2);
    const [points, setPoints] = useState(0);
    const brackets = [2, 3, 5];

    const getPoints = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(rating, bracket);
        setPoints(calculatePoints(parseInt(rating, 10), parseInt(bracket, 10)));
    }

    return (
        <div className="app">
            <div className="calculator">
                <form onSubmit={getPoints}>
                    <label>
                        Current rating:
                        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)}></input>
                    </label>
                    <label>
                        Bracket:
                        <select name="bracket" onChange={(e) => console.log(e) || setBracket(e.target.value)} value={bracket}>
                            {brackets.map((b) => (
                                <option key={b} value={b}>{b}s</option>
                            ))}
                        </select>
                    </label>
                    <button type="submit">Calculate</button>
                </form>
                <p>
                    {points !== null ? `Points: ${points}` : (
                        'Points calculation inaccurate under 150 rating, try improving your rating!'
                    )}
                </p>
            </div>
        </div>
    );
}

export default App;
