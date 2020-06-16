import { Given, When, Then } from 'cucumber';
import { should } from 'chai';
import * as assert from 'assert';

should();

Given('today is {string}', async (string: any) => {
    await browser.url('https://www.google.com');
    await (await $('.gLFyf')).setValue(string);
});

When('I ask whether its Friday yet', async () => {
    await browser.keys("\uE007");
});

Then('I should be told {string}', async (string: any) => {
    (await browser.getTitle()).should.equal(string);
});
