// points calculation taken from:
//  https://www.reddit.com/r/classicwow/comments/us1cg5/tbc_arena_calculator_formula_updated_for_s4/
export const calculatePoints = (rating, bracket = 5) => {
    // calculations are not accurate for < 150, return null and handle on UI
    if (rating <= 150) {
        return null;
    }
    const exp = -0.00412 * rating;
    const mathed = 123 * Math.pow(2.71828, exp);
    let points = (1022 / (1 + mathed)) + 580;
    if (bracket === 2) { points *= 0.76; }
    if (bracket === 3) { points *= 0.88; }
    return Math.round(points);
};