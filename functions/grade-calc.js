// students score, total possible score
// 15/20 -> you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


const gradeCalc = function(studentsScore, totalScore) {
    const scorePercent = Math.floor((studentsScore / totalScore) * 100);
    let grade = '';

    if (scorePercent >= 90) {
        grade = 'A';
    } else if (scorePercent >= 80) {
        grade = 'B';
    } else if (scorePercent >= 70) {
        grade = 'C';
    } else if (scorePercent >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return `You got a ${grade} (${scorePercent}%)!`;
}

const showGrade = gradeCalc(60, 80)
console.log(showGrade);