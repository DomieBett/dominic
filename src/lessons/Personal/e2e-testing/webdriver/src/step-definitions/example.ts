import { Given, When, Then } from 'cucumber';
import { should } from 'chai';

should();

Given('This is an example', async () => {
    await browser.url('https://www.google.com');
});

When('I start trying out this example', async  () => {
    await (await $('.gLFyf')).setValue('example');
    await browser.keys("\uE007");
});

Then('I should find that it works', async () => {
    (await browser.getTitle()).should.equal('example - Google Search');
});
