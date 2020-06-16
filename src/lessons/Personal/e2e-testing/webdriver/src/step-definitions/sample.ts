import { Given, When, Then } from 'cucumber';
import { should } from 'chai';

should();

Given('I am at work', async () => {
    await browser.url('https://www.google.com');
});

When('I start writing code', async  () => {
    await (await $('.gLFyf')).setValue('sample');
    await browser.keys("\uE007");
});

Then('I should be in the zone', async () => {
    (await browser.getTitle()).should.equal('sample - Google Search');
});
