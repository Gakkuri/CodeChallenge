/**
 * @param {array} activities - array of activities [Si, Ei], Si = start time, Ei = end time
 * @returns string - J = Charles, C = Loraine, IMPOSSIBLE if test case is impossible
 */
function assignActivities(activities) {
  // initialize results with activities.length;
  const results = Array(activities.length);

  // sort activities by start time, and format with initial index
  const SortedActivities = activities
    .map((a, i) => [...a, i])
    .sort((a, b) => a[0] - b[0]);

  // initialize charles & loraine end time, -1 = not assigned
  let j = -1;
  let c = -1;

  SortedActivities.forEach((activity) => {
    const [si, ei, i] = activity;
    if (si > ei) return (results[i] = "IMPOSSIBLE");
    if (si >= c) {
      c = ei;
      return (results[i] = "C");
    }
    if (si >= j) {
      j = ei;
      return (results[i] = "J");
    }
    return (results[i] = "IMPOSSIBLE");
  });

  if (results.includes("IMPOSSIBLE")) return "IMPOSSIBLE";
  return results.join("");
}

console.log(
  assignActivities([
    [660, 800],
    [360, 480],
    [420, 540],
    [600, 660],
  ])
);

console.log(
  assignActivities([
    [0, 1440],
    [1, 3],
    [2, 4],
  ])
);

console.log(
  assignActivities([
    [99, 150],
    [1, 100],
    [100, 301],
    [2, 5],
    [150, 250],
  ])
);

console.log(
  assignActivities([
    [0, 720],
    [720, 1440],
  ])
);
