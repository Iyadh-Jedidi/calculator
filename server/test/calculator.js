import * as chai from 'chai'

import { calculator } from '../src/components/calculator/calculator.controller.js';

describe("calculator", function () {
    describe("Add expression", function () {
        it("add two variables", function () {
            const expression = "2 + 5"
            const data = calculator(expression.split(" "))
            chai.expect(data.result).to.equal(7);
        });
    });
    describe("Test a false expression", function () {
        it("add two variables with false expression", function () {
            const expression = "2 + + 5"

            try {
                calculator(expression.split(" "))
            } catch (error) {
                chai.expect(error.message).to.equal("Expression not valid");
            }
        });
    });

    describe("Test a long expression", function () {
        it("some test", function () {
            const expression = "1 + 5 / 22 * 22"
            const data = calculator(expression.split(" "))
            chai.expect(data.result).to.equal(6);

        });
    });



});
