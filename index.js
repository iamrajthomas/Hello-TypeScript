"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var greetings = "Hello TypeScript";
console.log("First Hello-World Message From TypeScript: ".concat(greetings));
// PRIMITIVE DATATYPES 
console.log("===================================================================");
console.log("PRIMITIVE DATATYPES");
console.log("===================================================================");
var Score = 0;
var GameName = 'Chess';
console.log("Let Variable: ".concat(Score));
console.log("Const Variable: ".concat(GameName));
var FirstName = "Raj";
var Age = 10;
var IsActive = true;
// IDE INTELLISENCE
console.log("===================================================================");
console.log("IDE INTELLISENCE");
console.log("===================================================================");
// FirstName.
// Age.
// IsActive.
// UNDEFINED AND NULL DATATYPES 
// This is not much of use, because primitive type can have null values [shown below]
var u = undefined;
var n = null;
var MiddleName = undefined;
var MiddleAge = undefined;
var MiddleIsActive = undefined;
var LastName = null;
var LastAge = null;
var LastIsActive = null;
// ANY AND UNKNOWN DATATYPES 
console.log("===================================================================");
console.log("ANY AND UNKNOWN DATATYPES");
console.log("===================================================================");
var AnyValue;
AnyValue = 'Baker Street';
AnyValue = 961;
AnyValue = false;
var UnknownValue;
UnknownValue = 'Some Unknown Data';
UnknownValue = 4565646;
UnknownValue = false;
// ARRAY, TUPLES, OBJECT DATATYPES 
console.log("===================================================================");
console.log("ARRAY, TUPLES, OBJECT DATATYPES ");
console.log("===================================================================");
var NameList1 = ['Abc', 'Pqr', 'Xyz'];
var NameList2 = ['Abc', 'Pqr', 'Xyz'];
var IDList1 = [1, 2, 3, 4, 5, 6];
var IDList2 = [1, 2, 3, 4, 5, 6];
var Candidate = [11, 'Albert Einstein'];
console.log(Candidate[0], Candidate[1]);
var EmployeeInfo = {
    FirstName: 'Issac',
    LastName: 'Newtwon'
};
console.log(EmployeeInfo.FirstName, EmployeeInfo.LastName);
// UNION TYPES
console.log("===================================================================");
console.log("UNION TYPES");
console.log("===================================================================");
var UnCertainValue1;
UnCertainValue1 = "4654645";
UnCertainValue1 = 121313;
var UnCertainValue2;
UnCertainValue2 = true;
UnCertainValue2 = 121313;
// TYPE INFERENCE
console.log("===================================================================");
console.log("TYPE INFERENCE");
console.log("===================================================================");
// Notice SurName is string. That's beacuse of the JS Type Inference
var SurName = "Thomas";
// Notice WorkExperienceInYears is number. That's beacuse of the JS Type Inference
var WorkExperienceInYears = 5;
// Notice IsProductive is boolean. That's beacuse of the JS Type Inference
var IsProductive = true;
// OPTIONAL PARAMETERS ? 
console.log("===================================================================");
console.log("OPTIONAL PARAMETERS ? ");
console.log("===================================================================");
function PrintDeveoperName(fname, lname) {
    if (!lname)
        return "".concat(fname);
    return "".concat(fname, " ").concat(lname);
}
var Developer1 = PrintDeveoperName("Maximilian", "Schwarzmüller");
var Developer2 = PrintDeveoperName("Maximilian");
console.log(Developer1);
console.log(Developer2);
// DEFAULT PARAMETERS
console.log("===================================================================");
console.log("DEFAULT PARAMETERS");
console.log("===================================================================");
function PrintEngineerName(name, orgName) {
    if (orgName === void 0) { orgName = "DownTown Hall"; }
    return "".concat(name, " -- ").concat(orgName);
}
var Engeinner1 = PrintEngineerName("Kent C Dodds");
var Engeinner2 = PrintEngineerName("Kent C Dodds", "PayPal");
console.log(Engeinner1);
console.log(Engeinner2);
// FUNCTION
console.log("===================================================================");
console.log("FUNCTION");
console.log("===================================================================");
// 1. Function Declaration
function SayHello1(name) {
    return "Hello ".concat(name, " from Function Declaration");
}
console.log(SayHello1('Matt Miller'));
// 2. Function Expression
var SayHello2 = function (name) {
    return "Hello ".concat(name, " from Function Expression");
};
console.log(SayHello2('Maximilian Mschwarzmueller'));
// 3. Arrow Function 
var SayHello3 = function (name) {
    return "Hello ".concat(name, " from Arrow Expression");
};
console.log(SayHello3('Elon Musk'));
// 3. Short-Hand Arrow Function 
var SayHello4 = function (name) { return "Hello ".concat(name, " from Short-Hand Arrow Expression"); };
console.log(SayHello4('Sundar Pichai'));
// ENUM
console.log("===================================================================");
console.log("ENUM");
console.log("===================================================================");
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
;
var FavoriteColor = Color.GREEN;
console.log("FavoriteColor: ".concat(FavoriteColor));
var TRANSACTION;
(function (TRANSACTION) {
    TRANSACTION[TRANSACTION["UNPAID"] = 5] = "UNPAID";
    TRANSACTION[TRANSACTION["PAID"] = 6] = "PAID";
    TRANSACTION[TRANSACTION["HOLD"] = 7] = "HOLD";
    TRANSACTION[TRANSACTION["CANCEL"] = 8] = "CANCEL";
})(TRANSACTION || (TRANSACTION = {}));
;
var ThisMonthTransaction = TRANSACTION.UNPAID;
var LastMonthTransaction = TRANSACTION.PAID;
console.log("LastMonthTransaction: ".concat(LastMonthTransaction));
console.log("ThisMonthTransaction: ".concat(ThisMonthTransaction));
// INTERFACE
console.log("===================================================================");
console.log("INTERFACE");
console.log("===================================================================");
function GetAddress(Address) {
    console.log("".concat(Address.Lane1, " -- ").concat(Address.Lane2));
}
var CustomAddress1 = {
    Lane1: 'Baker Street',
    Lane2: 'DownTown, Central London'
};
GetAddress(CustomAddress1);
function GetAddressWithInterface(Address) {
    console.log("".concat(Address.Lane1, " -- ").concat(Address.Lane2, " -- Pin: ").concat(Address.Pin));
    if (!Address.Pin)
        console.log("".concat(Address.Lane1, " -- ").concat(Address.Lane2));
}
var CustomAddress2 = {
    Lane1: 'Phase 1',
    Lane2: 'Pune, MH'
};
GetAddressWithInterface(CustomAddress2);
var CustomAddress3 = {
    Lane1: 'West Delhi',
    Lane2: 'Delhi, IND',
    Pin: 8797987
};
GetAddressWithInterface(CustomAddress3);
// CLASS
console.log("===================================================================");
console.log("CLASS");
console.log("===================================================================");
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.Greet = function (Message) {
            return "".concat(Message, " by ").concat(this.EmployeeName);
        };
        this.EmployeeName = name;
    }
    Employee.prototype.DoSomeWork = function () {
        return "".concat(this.EmployeeName, " Learnt TypeScript Basics!!!");
    };
    return Employee;
}());
var employeeInstance1 = new Employee('Maxwell');
console.log(employeeInstance1.DoSomeWork());
console.log(employeeInstance1.Greet('Good Morning!!!!!!!'));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        var _this = _super.call(this, 'SuperAdmin') || this;
        _this.AttendMeeting = function () {
            return "Manager is in meeting!!";
        };
        return _this;
    }
    return Manager;
}(Employee));
var managerInstance1 = new Manager();
console.log(managerInstance1.AttendMeeting());
console.log(managerInstance1.DoSomeWork());
console.log(managerInstance1.EmployeeName);
console.log(managerInstance1.Greet('Good Evening !!!!!!!'));
