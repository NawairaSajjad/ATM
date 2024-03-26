import inquirer from "inquirer";

let balance: number = 10000;
const pinCode: number = 1234;

let insertedPin = await inquirer.prompt([
    {
        name: "userInput",
        message: "Enter your Pin : ",
        type: "number"
    },
    {
        name: "action",
        message: "What do you want to do",
        type: "list",
        choices: ["Withdraw","Check_Balance","Deposit"]
    },
]);
if(insertedPin.userInput === 1234 ){

   // console.log(`BALANCE : ${balance}`)

if(insertedPin.action === "Withdraw"){
    let optionOfWithdrawal = await inquirer.prompt({
        name:"options",
        message: "Select the withdrawal mode",
        type:"list",
        choices:["Fast_Cash","User_Input"]
    })
    if(optionOfWithdrawal.options === "Fast_Cash"){
        let amount = await inquirer.prompt({
            name:"cash",
            message: "Select cash of your choice:",
            type: "list",
            choices:["1000","2000","5000","10000"]
        })
        if(amount.cash === "1000"){
            balance -= amount.cash;
            console.log("Withdraw Successfully")
            console.log(`After withdraw your Balance : ${balance}`)
        }else if(amount.cash === "2000"){
            balance -= amount.cash;
            console.log("Withdraw Successfully")
            console.log(`After withdraw your Balance : ${balance}`)
        }else if(amount.cash === "5000"){
            balance -= amount.cash;
            console.log("Withdraw Successfully")
            console.log(`After withdraw your Balance : ${balance}`)
        }else if(amount.cash === "10000"){
            balance -= amount.cash;
            console.log("Withdraw Successfully")
            console.log(`After withdraw your Balance : ${balance}`)
        }
    }
    if(optionOfWithdrawal.options === "User_Input"){
    let ask = await inquirer.prompt({
        
            name:"askBalance",
            message:"Enter amount",
            type:"number"
        
    })
ask.askBalance;
if(ask.askBalance > balance){
    console.log("Unsufficient Balance !!")
}
else{
let total = balance - ask.askBalance;
console.log(`After withdraw your Balance : ${total}`)
}
}
}
else if(insertedPin.action === "Check_Balance"){
    console.log(`Current Balance :${balance}`);
}
else if(insertedPin.action === "Deposit"){
    let Deposit = await inquirer.prompt({
        
            name:"askDeposition",
            message:"Enter amount to deposit",
            type:"number"
        
    })
   Deposit.askDeposition;
    let totall = balance + Deposit.askDeposition
    console.log(`After deposition your balance :${totall}`)   

}else{
    console.log("exit")
}
} else{
    console.log("Invalid Pin, Please try again");
    
}