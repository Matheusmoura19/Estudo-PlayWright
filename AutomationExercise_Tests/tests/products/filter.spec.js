import {expect, test} from '@playwright/test';
import {startAdWatcher} from '../../helpers/closeButton';

let stopWatcher;

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com');
  stopWatcher = startAdWatcher(page);
});

test.afterEach(() => {
  stopWatcher();
});

test('Filtrar Produtos por Categoria "Women"', async ({ page }) => {

  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: 'Women' }).nth(0).click();
  await page.getByRole('link', { name: 'Dress' }).click();

  await expect(page.getByText('Women - Dress Products')).toBeVisible();
});

test('Filtrar Produtos por Categoria "Men"', async ({ page }) => {

  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: 'Men' }).nth(1).click();
  await page.getByRole('link', { name: 'Tshirts' }).click();

  await expect(page.getByText('Men - Tshirts Products')).toBeVisible();
});

test('Filtrar Produtos por Categoria "Kids"', async ({ page }) => { 
  
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: 'Kids' }).nth(2).click();
  await page.getByRole('link', { name: 'Tops & Shirts' }).click();

  await expect(page.getByText('Kids - Tops & Shirts Products')).toBeVisible();
});

test('Filtrar Produtos por Brand "Polo"', async ({ page }) => {
  
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: 'Polo' }).click();

  await expect(page.getByText('Brand - Polo Products')).toBeVisible();
});