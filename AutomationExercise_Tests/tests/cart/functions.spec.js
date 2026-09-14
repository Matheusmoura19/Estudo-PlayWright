import { test, expect } from '@playwright/test';
import {startAdWatcher} from '../../helpers/closeButton';

let stopWatcher;

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationexercise.com');
  stopWatcher = startAdWatcher(page);
});

test.afterEach(() => {
  stopWatcher();
});

test('Adicionar um Produto ao carrinho', async ({ page }) => {

  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: 'View Product' }).nth(0).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  await expect(page.getByText('Your product has been added to cart.')).toBeVisible();

  await page.getByRole('link', { name: 'View Cart' }).click();

  await expect(page.getByText('Shopping Cart')).toBeVisible();
});

