import { test, expect } from '@playwright/test';

test('Buscar um Produto existente', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('Premium Polo T-Shirts');
  await page.locator('#submit_search').click();
  await expect(page.getByText('Searched Products')).toBeVisible();
});

test('Buscar um Produto inexistente', async ({ page }) => {
  await page.goto('https://automationexercise.com');    
  await page.getByRole('link', { name: ' Products' }).click();

  await page.getByRole('textbox', { name: 'Search Product' }).fill('Qualquer coisa');
  await page.locator('#submit_search').click();

  await expect(page.getByText('Searched Products')).toBeVisible();
});
