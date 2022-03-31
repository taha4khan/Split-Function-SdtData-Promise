//student marks data

students = ['mazz', "daniyal", "wagid"];
subjects = ["sociology", "criminology", "psycology", "pst"];
marks = [[76, 83, 63, 58], [47, 68, 52, 63], [91, 87, 90, 88], [64, 52, 72, 80]];


for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    for (let j = 0; j < subjects.length; j++) {
        console.log(`${subjects[j]} : ${marks[i][j]}`);
    }
    console.log("\n");
}

