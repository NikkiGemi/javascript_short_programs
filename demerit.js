//assign demerit points
//speed limit 70
// for every 5 over, get 1 point
//if speed greater than 130, license suspended

function demerit(speed){
    const SPEEDLIMIT = 70;
    const KMPERPOINT = 5;
    if (speed <= (SPEEDLIMIT + KMPERPOINT)) return 'OK';
    let demeritPoints = Math.floor((speed - 70)/5);
    return demeritPoints >= 12 ? 'License Suspended' : demeritPoints
}

console.log(demerit(180))