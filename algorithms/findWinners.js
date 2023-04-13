/**
 * Find Players With Zero or One Losses
 *
 * You are given an integer array matches where matches[i] = [winneri, loseri]
 * indicates that the player winneri defeated player loseri in a match.
 *
 * Return a list answer of size 2 where:
 * - answer[0] is a list of all players that have not lost any matches.
 * - answer[1] is a list of all players that have lost exactly one match.
 * The values in the two lists should be returned in increasing order.
 *
 * Note:
 * - You should only consider the players that have played at least one match.
 * - The testcases will be generated such that no two matches will have the same outcome.
 *
 * @param {number[][]} matches
 * @return {number[][]}
 */
// Solution 1 - 487ms - Beats 42.29%
var findWinners = function (matches) {
  // define list of all players in a Set & store losers in hash map
  let playersSet = new Set();
  let losersMap = new Map();
  for (const [winner, loser] of matches) {
    playersSet.add(winner);
    playersSet.add(loser);

    losersMap.set(loser, (losersMap.get(loser) || 0) + 1);
  }

  // We get players who never lost thx to map.has(player) being false
  // We get players who lost 1 match thx to map.get(player) === 1
  let neverLost = [];
  let lostOnlyOnce = [];
  for (const player of playersSet) {
    if (!losersMap.has(player)) {
      neverLost.push(player);
    }

    if (losersMap.get(player) === 1) {
      lostOnlyOnce.push(player);
    }
  }

  neverLost.sort((a, b) => a - b);
  lostOnlyOnce.sort((a, b) => a - b);

  return [neverLost, lostOnlyOnce];
};

// Examples
console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
); // [[1,2,10],[4,5,7,8]]
console.log(
  findWinners([
    [2, 3],
    [1, 3],
    [5, 4],
    [6, 4],
  ])
); // [[1,2,5,6],[]]
