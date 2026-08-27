import { test, expect } from '@playwright/test';
import {startAdWatcher} from '../../helpers/closeButton';
import { Email, Password } from '../../helpers/testCredentials';

let stopWatcher;

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com');
  stopWatcher = startAdWatcher(page);
});

test.afterEach(() => {
  stopWatcher();
});

test('Criando conta de usuário', async ({ page }) => {

  // 1: Inicia o signup
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Test User');
  await page
    .locator('form')
    .filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address')
    .fill(Email);
  await page.getByRole('button', { name: 'Signup' }).click();

  // 2: Preeche os dados da conta
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).fill('Senha123');
  await page.locator('#days').selectOption('19');
  await page.locator('#months').selectOption('7');
  await page.locator('#years').selectOption('2006');

  // 3: Preenche os dados de endereço
  await page.getByRole('textbox', { name: 'First name *' }).fill('Test');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('User');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Test Company');
  await page.locator('#address1').fill('Test Address');
  await page.getByLabel('Country *').selectOption('United States');
  await page.getByRole('textbox', { name: 'State *' }).fill('Test State');
  await page.locator('#city').fill('Test City');
  await page.locator('#zipcode').fill('1234567');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('123456789');

  // 4: Cria conta
  await page.getByRole('button', { name: 'Create Account' }).click();

  await expect(page.getByText('Account Created!')).toBeVisible();
});

test('Tentar criar conta com usuário existente', async ({ page }) => {
    
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('Test User');
    await page
        .locator('form')
        .filter({ hasText: 'Signup' })
        .getByPlaceholder('Email Address')
        .fill(Email);
    await page.getByRole('button', { name: 'Signup' }).click();

    await expect(page.getByText('Email Address already exist!')).toBeVisible();
});
