import {Selector} from 'testcafe';

const myName = Selector("[data-testid=name-input]")
const osOption = Selector("[data-testid=windows-radio]")
const submitButton = Selector("[data-testid=submit-button]")

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/")

test.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
        .expect(myName.value).eql("","input is empty")
        .typeText(myName, "Ulises")
        .expect(myName.value).eql("Ulises", "input contains 'Ulises'")
        .click(osOption)
        .click(submitButton);
})