import { useState } from 'react';
import './calculator.css';
import { calculatePoints } from '../utils';

const RatingToPoints = () => {
    const [rating, setRating] = useState(0);
    const [bracket, setBracket] = useState(2);
    const [points, setPoints] = useState(0);
    const brackets = [2, 3, 5];

    const getPoints = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPoints(calculatePoints(rating, bracket));
    }

    return (
        <div className="calculator">
            <form onSubmit={getPoints}>
                <label>
                    Current rating:
                    <input type="number" value={rating} onChange={(e) => setRating(parseInt(e.target.value, 10))}></input>
                </label>
                <label>
                    Bracket:
                    <select name="bracket" onChange={(e) => setBracket(parseInt(e.target.value, 10))} value={bracket}>
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
    );
}

export default RatingToPoints;
