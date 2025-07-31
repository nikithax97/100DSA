//DAY-9
//1. Remove Duplicate Emails 
let emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"];

function removeDuplicateEmails(emails) {
    let i = 0;
    for(let j= 1; j < emails.length; j++) {
        if(emails[j] !== emails[i]) {
           i++;
           emails[i] = emails[j];
        }
    }
    let result = [];
    for(let j = 0; j <= i; j++ ) {
        result.push(emails[j]);
    }
    return result;
}
console.log(removeDuplicateEmails(emails));

//2. Playlist Duration Matcher (Music App Feature)
let songs = [3, 5, 8, 2, 7, 4];  
let targetDuration = 10;

function playlistPair(songs, targetDuration) {
    songs.sort((a,b) => a - b);

    let left = 0;
    let right = songs.length - 1;

    while(left < right) {
        const sum = songs[left] + songs[right];

        if(sum === targetDuration) {
            return [songs[left], songs[right]];
        } else if(sum < targetDuration) {
            left ++;
        } else {
            right --;
        }
    }
    return null;
}
console.log(playlistPair(songs, targetDuration));


