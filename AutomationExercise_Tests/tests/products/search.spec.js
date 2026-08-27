import { test, expect } from '@playwright/test';
import { Email } from '../../helpers/testCredentials';
import {startAdWatcher} from '../../helpers/closeButton';

let stopWatcher;

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com');
  stopWatcher = startAdWatcher(page);
});

test.afterEach(() => {
  stopWatcher();
});

test('Buscar um Produto existente', async ({ page }) => {

  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('Premium Polo T-Shirts');
  await page.locator('#submit_search').click();
  await expect(page.getByText('Searched Products')).toBeVisible();
});

test('Buscar um Produto inexistente', async ({ page }) => {
  await page.getByRole('link', { name: ' Products' }).click();

  await page.getByRole('textbox', { name: 'Search Product' }).fill('Qualquer coisa');
  await page.locator('#submit_search').click();

  await expect(page.getByText('Searched Products')).toBeVisible();
});

test('Buscar e visualizar os detalhes de um Produto', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('Premium Polo T-Shirts');
  await page.locator('#submit_search').click();

  await page.getByRole('link', { name: 'View Product' }).click();

  await expect(page.getByText('Add to cart')).toBeVisible();
});

test('Fazer uma avaliação de um Produto', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('Premium Polo T-Shirts');
  await page.locator('#submit_search').click();
  await page.getByRole('link', { name: 'View Product' }).click();

  await page.getByPlaceholder('Your Name').fill('Teste');
  await page.getByPlaceholder('Email Address').nth(0).fill(Email)
  await page.getByPlaceholder('Add Review Here!').fill('Teste de avaliação');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Thank you for your review.')).toBeVisible();
});
