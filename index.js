/* ~UNIT TEST~
const multiplication = [3, 2, 1], [9, 1, 1]

const multiply = (x, y) => {
    return x * y;
    }

module.exports = {multiply}



const {multiply} = require("./index")

test("multiply 3 and 9 to equals to 27", () => {
    expect(multiply(3, 9).toBe(27);
    )};
test("multiply 2 and 1 to equals to 2", () => {
    expect(multiply(2, 1).toBe(2);
    )};
test("multiply 1 and 1 to equals to 1", () => {
    expect(multiply(1, 1).toBe(1);
    )};







                    ~Part Two~

const concatOdds = ([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])
return concatOdds.filter((num) => num % 2 == 1);

User creates the function "concatOdds" with ([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])

test("num % 2 == 1 to 3 to equals to 3", () => {
    expect(odd(3).toBe(3);
    )};
test("num % 2 == 1 to 2 to equals to remainder of 1", () => {
    expect(odd(2).toBe(2);
    )};


                     ~Functional Test~
When the user adds an item they want it goes directly to the shopping cart.
When the user clicks on shopping cart, three prompts pop up with "log in",  "sign Up" or "Guest".
When user clicks "guest" a pop up appears asking if user wants to create account.
when the user clicks "continue as guest" an information page appears.
when the user fills information, a check out screen is given.
when user clicks "check out" if everything is filled out properly it will direct them to confirmation page.
If user did not fill out information properly "error" with message telling using where the error is at.
when user corrects information no error shall appear.
when user clicks checkout the user should be sent to confirmation screen of purchase.

