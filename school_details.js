const prompt = require("prompt-sync")()
const alert = require('alert')

function schoolDetails(schoolNumber) {

    let ret = {
        school: [],
        schoolScore: 0,
        schoolDisplay: [],
        schoolName: ""
    }

    ret.schoolName = prompt(`Enter name of school ${schoolNumber}: `)

    for (let i = 0; i < 5; i++) {
        let studentName = prompt(`Enter student[${i+1}] name and score for school ${schoolNumber}: `)

        var parts = studentName.split(" ")
        var name = parts.slice(0, parts.length).join(" ")
        var score = parts[parts.length-1]

        if (ret.school.indexOf(name) === -1) {
            ret.school.push(name)
            ret.schoolScore += parseInt(score) === 1 ? 5 : 0 
            ret.schoolDisplay.push(`${studentName}`)
        }
        else {
            alert("Student name must be unique. Please try again: ")
            i--
        }
    }

    return ret
}

module.exports = { schoolDetails }