import { Given, When, Then, Before, After } from '@cucumber/cucumber';

import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../support/utils/world';
import { expect } from 'playwright/test';

// Declare the global variable with a type of LoginPage or null
let loginPage: LoginPage | null = null;
// Use environment variables for username and password


Before(async function (this: CustomWorld) {
  await this.init();
  loginPage = new LoginPage(this.page);
});

After(async function (this: CustomWorld) {
  await this.close();
});


Given('I am on the login page', async function () {
  if (this.page) {
    await loginPage?.navigate('https://youth-foundry-virtual-stg.foundrybc.ca/account/login');
    //const screenshotBuffer = await this.page.screenshot({ encoding: 'base64' });
  } else {
    throw new Error('Page is not initialized');
  }
});

When('I enter valid credentials', async function () {
  if (this.page) {
    const username: string = process.env.USERNAME as string;
    const password: string = process.env.PASSWORD as string; 
   // await loginPage?.login('1724345481.richmond@inup97z9.mailosaur.net', 'Password@1');
   await loginPage?.login(username, password);
  } else {
    throw new Error('Page is not initialized');
  }
});

When('I enter valid credentials {string} and {string}', async function (email, password) {
  if (this.page) {
    const uEmail: string = process.env.USERNAME as string;
    const uPassword: string = process.env.PASSWORD as string; 
   if(email === 'valid email' && password === 'valid password'){
    await loginPage?.login(uEmail, uPassword);
   }else if(email === 'empty'){
    await loginPage?.login('', password);
   }else if(password === 'empty'){
    await loginPage?.login(email,'');
   }else{
    await loginPage?.login(email, password);
   } 
  } else {
    throw new Error('Page is not initialized');
  }
});

When('I click the login button', async function () {
  if (this.page) {
   await loginPage?.signIn();
 } else {
   throw new Error('Page is not initialized');
 }
  
});

Then('I should be redirected to the after login dashboard', async function () {
  if (this.page) {
  const result =  await loginPage?.validateDashboard();
  expect(result).toBe("Connect");
 } else {
   throw new Error('Page is not initialized');
 }
  
});

Then('user prompted with {string} exception', async function (errorMessage) {
  if (this.page) {
    const error =  await loginPage?.getPromptText();
    expect(error).toBe(errorMessage);
    if (!error) {
      throw new Error(`Expected error message not found: ${errorMessage}`);
    }
   } else {
     throw new Error('Page is not initialized');
   }
});
