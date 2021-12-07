const averageExams = (valuesExam) => {
    const valueValidation = valuesExam.every(exam => typeof exam === 'number');
    if(!valueValidation) throw Error('Please input number');

    const sumValue = valuesExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumValue / valuesExam.length;
};

const isStudentPassExam = (valueExam, name) => {
    const minValues = 75;
    const average = averageExams(valueExam)

    if(average > minValues) {
        console.log(`${name} pass the exams`);
        return true;
    } else {
        console.log(`${name} fail the exams`);
        return false;
    }
};

module.exports = { averageExams, isStudentPassExam };