//main test file for travis integration
const {expect} = require("chai");
const mainJs = require("../src/main.js");

describe('Base test', () => {
	it("Should return true for true", ()=>{
		expect(false).to.equal(false);
	});
});

describe('Main js test', () => {
	it("Should return true for dayrin", ()=>{
		expect(mainJs("bill")).to.equal(false);
		expect(mainJs("dayrin")).to.equal(true);
	});
});