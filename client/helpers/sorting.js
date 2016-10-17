/**
 * The .sort() that uses this is called on an array of <Player /> components
 */
export const compareScoreFunction = (a, b) => {
    if (a.props.player.stats.score < b.props.player.stats.score) return 1;
    if (a.props.player.stats.score > b.props.player.stats.score) return -1;
    return 0;
};

/**
 * The .sort() that uses this is called on the players slice of state
 */
export const compareScoreFunctionInverse = (a, b) => {
    if (a.stats.score > b.stats.score) return 1;
    if (a.stats.score < b.stats.score) return -1;
    return 0;
};

/**
 * Takes an array of players and the authed player
 * Returns an array of ids of the players which the authed player is allowed to challenge
 */
export const getChallengeables = (players, me) => {
    let filteredPlayers = players.filter(pl => {
        return (
            pl._id !== me._id &&
            !pl.stats.locked.id &&
            pl.stats.score >= me.stats.score
        );
    });

    if (!filteredPlayers.length) return [];

    let sortedPlayers = filteredPlayers.sort(compareScoreFunctionInverse);

    let challengeableScore = sortedPlayers[0].stats.score;

    return sortedPlayers
        .filter(pl => pl.stats.score === challengeableScore)
        .map(pl => pl._id);
};