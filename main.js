import inquirer from "inquirer";
let users = await inquirer.prompt({
    type: "input",
    name: "paragraph",
    message: "Enter your paragraph to count words :\n"
});
let words = users.paragraph.trim().split(" ");
console.log("Yuor word count is " + " " + words.length + "\n");
let will = await inquirer.prompt({
    type: "list",
    name: "Want To",
    message: "Do you want to know letter count?",
    choices: ["Yes", "No"]
});
if (will.WantTo === "Yes") {
    function counter(paragraph) {
        let lettercount = paragraph.replace(/s/g + "");
        return paragraph.length;
    }
    console.log("Your letter count is " + " " + counter(users.paragraph));
}
else {
    console.log("OK");
}
