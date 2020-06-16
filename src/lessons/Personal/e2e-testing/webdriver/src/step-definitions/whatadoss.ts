import { Given, When, Then } from 'cucumber';
import { should } from 'chai';

should();

Given('We want to know whatadoss', async () => {
    await browser.url('https://www.google.com');
});

When('I ask whatadoss', async  () => {
    await (await $('.gLFyf')).setValue('whatadoss');
    await browser.keys("\uE007");
});

Then('Whatadoss should answer', async () => {
    (await browser.getTitle()).should.equal('whatadoss - Google Search');
});
