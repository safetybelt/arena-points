import { useState } from 'react';
import './calculator.css';
import { calculateRating } from '../utils';

const RatingToPoints = () => {
    const [points, setPoints] = useState(0);
    const [ratings, setRatings] = useState([0,0,0]);
    const brackets = [2, 3, 5];

    const getRating = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const ratings = brackets.map((bracket) => calculateRating(points, bracket));
        setRatings(ratings);
    }

    return (
        <div className="calculator">
            <form onSubmit={getRating}>
                <label>
                    Desired points:
                    <input type="number" value={points} onChange={(e) => setPoints(parseInt(e.target.value, 10))}></input>
                </label>
                <button type="submit">Calculate</button>
            </form>
            <dl>
                {ratings.map((rating, i) => (
                    <div key={i}>
                        <dt>{brackets[i]}s:</dt>
                        <dl>{isNaN(rating) ? 'Unattainable' : rating}</dl>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default RatingToPoints;
