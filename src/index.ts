import fs from "fs"

fs.readFile("not-found-txt.txt", (err, data) => {
    console.log(err)
})

console.log("hello world!")
