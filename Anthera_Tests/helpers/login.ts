import { Page } from '@playwright/test';

export async function loginDistribuidor(page: Page) {
  await page.goto('https://anthera-project-nu.vercel.app/');
  await page.getByRole('link', { name: 'Área do Parceiro' }).nth(0).click();
  await page
    .getByPlaceholder('seu@email.com')
    .fill('distribuidor_teste@anthera.com');

  await page
    .getByTestId('distribuidor-login-password')
    .fill('Parceiro@123');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.waitForTimeout(2000);
  await page.reload();
  await page.isVisible('text=Bem-vindo ao Portal');
  await page.getByTestId('btn-guidedtutorial-1').click();
}

export async function loginAdmin(page: Page) {
  await page.goto('https://anthera-project-nu.vercel.app/portal-gestao');
  await page
    .getByPlaceholder('admin@anthera.com')
    .fill('admin_teste@anthera.com');

  await page
    .getByTestId('admin-login-password')
    .fill('Admin123');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.isVisible('text=Bem-vindo ao Admin');
  await page.getByTestId('btn-guidedtutorial-1').click();
}