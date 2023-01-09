const { schoolDetails } = require("./school_details")

function acceptInput() {

    const {schoolName: school1Name, schoolScore: school1Score, schoolDisplay: school1Display} = schoolDetails("1")
    const {schoolName: school2Name, schoolScore: school2Score, schoolDisplay: school2Display} = schoolDetails("2")

    school1Display.sort()
    school2Display.sort()

    console.log(`\nSummary:`)
    console.log(`Name of school 1: ${school1Name}`)
    console.log(`Students: ${school1Display}`)
    console.log(`Total Score: ${school1Score} \n`)
    console.log(`Name of school 2: ${school2Name}`)
    console.log(`Students: ${school2Display}`)
    console.log(`Total Score: ${school2Score} \n`)

    let winner = school1Name
    if (school1Score < school2Score) {
        winner = school2Name
    } else if (school1Score === school2Score) {
        winner = `Tie between ${school1Name} and ${school2Name}`
    }

    console.log(`WINNER: ${winner}`)

}

acceptInput()