export {}

let greetings = "Hello TypeScript"
console.log(`First Hello-World Message From TypeScript: ${greetings}`);

// VAR, LET AND CONST
console.log("===================================================================");
console.log("VAR, LET AND CONST");
console.log("===================================================================");

var Championship: string = 'World Cup 2022'; 
let Score: number = 0;
const GameName: string = 'Chess';
console.log(`Let Variable: ${Score}`);
console.log(`Const Variable: ${GameName}`);

// PRIMITIVE DATATYPES 
console.log("===================================================================");
console.log("PRIMITIVE DATATYPES");
console.log("===================================================================");
let FirstName: string = "Raj"
let Age : number = 10;
let IsActive : boolean = true;


// IDE INTELLISENCE
console.log("===================================================================");
console.log("IDE INTELLISENCE");
console.log("===================================================================");
// FirstName.
// Age.
// IsActive.

// UNDEFINED AND NULL DATATYPES 
// This is not much of use, because primitive type can have null values [shown below]
// In a way, we can say, null and undefined types are subset of primitive types
let u : undefined = undefined;
let n : null = null;

// This can be used when strict mode is set to False
// It will throw when strict mode is set to True

// let MiddleName : string = undefined;
// let MiddleAge : number = undefined;
// let MiddleIsActive : boolean = undefined;

// let LastName : string = null;
// let LastAge : number = null;
// let LastIsActive : boolean = null;

let MiddleName : string | undefined  = undefined;
let MiddleAge : number | undefined = undefined;
let MiddleIsActive : boolean | undefined = undefined;

let LastName : string | null = null;
let LastAge : number | null = null;
let LastIsActive : boolean | null = null;


// ANY AND UNKNOWN DATATYPES 
console.log("===================================================================");
console.log("ANY AND UNKNOWN DATATYPES");
console.log("===================================================================");

let AnyValue : any;
AnyValue = 'Baker Street';
AnyValue = 961;
AnyValue = false;


let UnknownValue : unknown;
UnknownValue = 'Some Unknown Data';
UnknownValue = 4565646;
UnknownValue = false;


// ARRAY, TUPLES, OBJECT DATATYPES 
console.log("===================================================================");
console.log("ARRAY, TUPLES, OBJECT DATATYPES ");
console.log("===================================================================");

let NameList1 : string[] = ['Abc', 'Pqr', 'Xyz'];
let NameList2 : Array<string> = ['Abc', 'Pqr', 'Xyz'];

let IDList1 : number[] = [1, 2, 3, 4, 5, 6];
let IDList2 : Array<number> = [1, 2, 3, 4, 5, 6];

let Candidate : [number, string] = [11, 'Albert Einstein'];
console.log(Candidate[0], Candidate[1])

let EmployeeInfo = {
    FirstName: 'Issac',
    LastName: 'Newtwon'
}

console.log(EmployeeInfo.FirstName, EmployeeInfo.LastName)

// UNION TYPES
console.log("===================================================================");
console.log("UNION TYPES");
console.log("===================================================================");

let UnCertainValue1 : string | number;
UnCertainValue1 = "4654645";
UnCertainValue1 = 121313;

let UnCertainValue2 : number | boolean ;
UnCertainValue2 = true;
UnCertainValue2 = 121313;


// TYPE INFERENCE

console.log("===================================================================");
console.log("TYPE INFERENCE");
console.log("===================================================================");

// Notice SurName is string. That's beacuse of the JS Type Inference
let SurName = "Thomas";
// Notice WorkExperienceInYears is number. That's beacuse of the JS Type Inference
let WorkExperienceInYears = 5;
// Notice IsProductive is boolean. That's beacuse of the JS Type Inference
let IsProductive = true;

// OPTIONAL PARAMETERS ? 
console.log("===================================================================");
console.log("OPTIONAL PARAMETERS ? ");
console.log("===================================================================");

function PrintDeveoperName(fname: string, lname?: string) : string {
    if(!lname) return `${fname}`
    return `${fname} ${lname}`
}
let Developer1: string = PrintDeveoperName("Maximilian", "Schwarzmüller");
let Developer2: string = PrintDeveoperName("Maximilian");

console.log(Developer1);
console.log(Developer2);

// DEFAULT PARAMETERS
console.log("===================================================================");
console.log("DEFAULT PARAMETERS");
console.log("===================================================================");

function PrintEngineerName(name: string, orgName: string = "DownTown Hall") : string {
    return `${name} -- ${orgName}`
}
let Engeinner1: string = PrintEngineerName("Kent C Dodds");
let Engeinner2: string = PrintEngineerName("Kent C Dodds", "PayPal");

console.log(Engeinner1);
console.log(Engeinner2);


// FUNCTION
console.log("===================================================================");
console.log("FUNCTION");
console.log("===================================================================");

// 1. Function Declaration
function SayHello1(name: string): string{
    return `Hello ${name} from Function Declaration`
}
console.log(SayHello1('Matt Miller'));


// 2. Function Expression
const SayHello2 = function(name: string) : string {
    return `Hello ${name} from Function Expression`
}
console.log(SayHello2('Maximilian Mschwarzmueller'));

// 3. Arrow Function 
const SayHello3 = (name: string) : string => {
    return `Hello ${name} from Arrow Expression`
}
console.log(SayHello3('Elon Musk'));

// 3. Short-Hand Arrow Function 
const SayHello4 = name => `Hello ${name} from Short-Hand Arrow Expression`;
console.log(SayHello4('Sundar Pichai'));


// ENUM
console.log("===================================================================");
console.log("ENUM");
console.log("===================================================================");

enum Color { RED, GREEN, BLUE };
let FavoriteColor : Color = Color.GREEN;
console.log(`FavoriteColor: ${FavoriteColor}`)

enum TRANSACTION { UNPAID = 5, PAID, HOLD, CANCEL };
let ThisMonthTransaction : TRANSACTION = TRANSACTION.UNPAID;
let LastMonthTransaction : TRANSACTION = TRANSACTION.PAID;
console.log(`LastMonthTransaction: ${LastMonthTransaction}`)
console.log(`ThisMonthTransaction: ${ThisMonthTransaction}`)


// INTERFACE
console.log("===================================================================");
console.log("INTERFACE");
console.log("===================================================================");

function GetAddress(Address : {Lane1: string, Lane2: string}) {
    console.log(`${Address.Lane1} -- ${Address.Lane2}`)
}

let CustomAddress1 = {
    Lane1: 'Baker Street',
    Lane2: 'DownTown, Central London'
}

GetAddress(CustomAddress1);


interface Address {
    Lane1: string,
    Lane2: string,
    Pin?: number
}

function GetAddressWithInterface(Address : Address) {
    console.log(`${Address.Lane1} -- ${Address.Lane2} -- Pin: ${Address.Pin}`)
    if(!Address.Pin)
        console.log(`${Address.Lane1} -- ${Address.Lane2}`)
}

let CustomAddress2 : Address = {
    Lane1: 'Phase 1',
    Lane2: 'Pune, MH'
}

GetAddressWithInterface(CustomAddress2);

let CustomAddress3 : Address = {
    Lane1: 'West Delhi',
    Lane2: 'Delhi, IND',
    Pin: 8797987
}

GetAddressWithInterface(CustomAddress3);


// CLASS
console.log("===================================================================");
console.log("CLASS");
console.log("===================================================================");

class Employee {

    EmployeeName: string;
    constructor(name: string) {
        this.EmployeeName = name;
    }

    Greet = function(Message : string) {
        return `${Message} by ${this.EmployeeName}`
    }

    DoSomeWork() : string {
        return `${this.EmployeeName} Learnt TypeScript Basics!!!`
    }

}

let employeeInstance1 = new Employee('Maxwell');
console.log(employeeInstance1.DoSomeWork());
console.log(employeeInstance1.Greet('Good Morning!!!!!!!'));


class Manager extends Employee {

    constructor() {
        super('SuperAdmin');
    }

    AttendMeeting = () => {
        return `Manager is in meeting!!`
    }


}

let managerInstance1 = new Manager();
console.log(managerInstance1.AttendMeeting())
console.log(managerInstance1.DoSomeWork())
console.log(managerInstance1.EmployeeName)
console.log(managerInstance1.Greet('Good Evening !!!!!!!'))