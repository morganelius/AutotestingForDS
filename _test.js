Feature('Testing DS');

Scenario('DS dev', ({ I }) => {
  I.amOnPage('https://digitalskynet.com/');
  I.click('.solid-blue-btn');
  I.seeElement('.header__first')
  // Name form
  I.fillField('//body/app-root[1]/div[1]/div[3]/app-estimation[1]/div[1]/form[1]/div[1]/div[1]/div[2]/input[1]',
  'Hello from CodeceptJS'); 
  // Project type
  I.click('//body/app-root[1]/div[1]/div[3]/app-estimation[1]/div[1]/form[1]/div[2]/div[1]/div[2]/label[2]/div[1]/img[1]'); 
  // About
  I.fillField('//body/app-root[1]/div[1]/div[3]/app-estimation[1]/div[1]/form[1]/div[3]/div[1]/div[2]/textarea[1]', 
  "It's my first test by CodeceptJS"); 
  // NDA
  I.click('//body/app-root[1]/div[1]/div[3]/app-estimation[1]/div[1]/form[1]/div[4]/div[1]/div[2]/label[1]/div[1]'); 
  // Phone
  I.fillField('//body/app-root[1]/div[1]/div[3]/app-estimation[1]/div[1]/form[1]/div[5]/div[1]/div[2]/div[1]/input[1]', 
  "1234567890"); 
  // Email
  I.fillField('//body/app-root[1]/div[1]/div[3]/app-estimation[1]/div[1]/form[1]/div[5]/div[1]/div[2]/div[2]/input[1]', 
  "email@mail.com");
  pause();
});