// points calculation taken from:
//  https://www.reddit.com/r/classicwow/comments/us1cg5/tbc_arena_calculator_formula_updated_for_s4/
export const calculatePoints = (rating, bracket = 5) => {
    // calculations are not accurate for < 150, return null and handle on UI
    if (!rating || rating <= 150) {
        return null;
    }
    const exp = -0.00412 * rating;
    const mathed = 123 * Math.pow(2.71828, exp);
    let points = (1022 / (1 + mathed)) + 580;
    if (bracket === 2) { points *= 0.76; }
    if (bracket === 3) { points *= 0.88; }
    return Math.round(points);
};

/*
Rating = math.ceil((1/-0.00412)*(math.log((((1022/(DesiredPointsMod-580))-1)/123))/(math.log(2.71828))))

Where DesiredPointsMod reverses the bracket by dividing the Desired Points by the bracket multiplier e.g for 2's (DesiredPoints/0.76), 3's is 0.88 and 5's is 1 (or no change)
*/

export const calculateRating = (points, bracket) => {
    const mods = { 2: 0.76, 3: 0.88, 5: 1 };
    const mod = points / mods[bracket];
    return Math.ceil((1/-0.00412)*(Math.log((((1022/(mod-580))-1)/123))/(Math.log(2.71828))));
}
