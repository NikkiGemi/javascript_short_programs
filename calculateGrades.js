//calculate grade 
function calculateAverageGrade (gradesArr) {
    let totalGrade = 0;
    for (let value of gradesArr) {
        totalGrade += value;
    }
    let averageMarks = totalGrade/(gradesArr.length);
    console.log('avg', averageMarks)
    if (averageMarks < 50) return 'D';
    if (averageMarks < 70) return 'C';
    if (averageMarks < 90) return 'B'
    return 'A'
}
console.log(calculateAverageGrade([90, 90, 89]))