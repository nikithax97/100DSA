//DAY-10
//You're building a calendar integration tool. Two people share their schedules in the form of sorted busy time intervals (start and end times).
//  You need to merge both their busy slots into a single calendar and combine any overlapping or touching intervals.

let userA = [[9, 11], [13, 15], [18, 20]];
let userB = [[10, 12], [14, 16], [17, 18]];

function mergeTimes(userA, userB) {
    const merged = [...userA, ...userB];
     merged.sort((a, b) => a[0] - b[0]);

     const result = []; 

     for (const interval of merged) {
        if (result.length === 0) {
            result.push(interval);
        } else {
            const last = result[result.length - 1];

            // If intervals overlap or touch: merge them
            if (interval[0] <= last[1]) {
                last[1] = Math.max(last[1], interval[1]);
            } else {
                result.push(interval);
            }
        }
     }
    return result;
}
console.log(mergeTimes(userA, userB));


