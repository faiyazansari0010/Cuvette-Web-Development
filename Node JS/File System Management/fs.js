const fs = require("fs")

fs.writeFile("file1.txt", "Hello World", () => {
  console.log("writeFile - File Created")
})

fs.readFile("file1.txt", "utf-8", (data) => {
  console.log(data)
})

fs.appendFile("file1.txt", "This is appended text", () => {
  console.log("appendFile -")
})

fs.rename("file1.txt", "newFile1.txt", () => {
  console.log("fileRename - file renamed")
})

fs.unlink("newFile1.txt", () => {
  console.log("file deleted")
})