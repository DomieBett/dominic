import { Given, When, Then } from 'cucumber';
import { should } from 'chai';

should();

Given('We want to know whodiss', async () => {
    await browser.url('https://www.google.com');
});

When('I ask whodiss', async  () => {
    await (await $('.gLFyf')).setValue('whodiss');
    await browser.keys("\uE007");
});

Then('Whodiss should answer', async () => {
    (await browser.getTitle()).should.equal('whodiss - Google Search');
});
