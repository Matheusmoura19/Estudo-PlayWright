import { test, expect } from '@playwright/test';
import { Email, Password, InvalidEmail, InvalidPassword } from '../../helpers/testCredentials';
import {startAdWatcher} from '../../helpers/closeButton';

let stopWatcher;

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com');
  stopWatcher = startAdWatcher(page);
});

test.afterEach(() => {
  stopWatcher();
});

test('Login com credenciais válidas', async ({ page }) => {

  // 1: Inicia o login
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).nth(0).fill(Email);
  await page.getByRole('textbox', { name: 'Password' }).fill(Password);
  await page.getByRole('button', { name: 'Login' }).click();

  // 2: Confirma o login
  await expect(page.getByText('Logged in as Test User')).toBeVisible();
});

test('Login com credenciais inválidas', async ({ page }) => {

  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).nth(0).fill(InvalidEmail);
  await page.getByRole('textbox', { name: 'Password' }).fill(InvalidPassword);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();

});

test('Logout', async ({ page }) => {

  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).nth(0).fill(Email);
  await page.getByRole('textbox', { name: 'Password' }).fill(Password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: ' Logout' }).click();

  await expect(page.getByText('login to your account')).toBeVisible();
});

test('Login e Deletar a conta', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).nth(0).fill(Email);
  await page.getByRole('textbox', { name: 'Password' }).fill(Password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  
  await expect(page.getByText('Account Deleted!')).toBeVisible();
});
