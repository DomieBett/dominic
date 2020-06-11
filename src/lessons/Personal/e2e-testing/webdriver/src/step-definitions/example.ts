import { Given, When, Then } from 'cucumber';
import { should } from 'chai';
import * as assert from 'assert';

should();

Given('today is Monday', async () => {
    await browser.url('https://www.google.com');
});

When('I ask whether its Friday yet', async () => {
    await (await $('.gLFyf')).setValue('hello');
    await browser.keys("\uE007");
});

Then('I should be told {string}', async (string: any) => {
    (await browser.getTitle()).should.equal('hello - Google Search - wrong');
});
