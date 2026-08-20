import { test, expect } from '@playwright/test';
import { loginDistribuidor, loginAdmin } from '../helpers/login';

test('Abrir Youtube e Pesquisar', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('link', { name: 'Shorts' }).click();
  await page.getByRole('button', { name: 'Comentários' }).click();
  await expect(page).toHaveURL(/.*search_query=Playwright/);
});

test('Abrir Anthera e Logar', async ({ page }) => {
  await page.goto('https://anthera-project-nu.vercel.app/');
  await page.getByRole('link', { name: 'Área do Parceiro' }).nth(0).click();
  await page.getByPlaceholder('seu@email.com').fill('distribuidor_teste@anthera.com');
  await page.getByTestId('distribuidor-login-password').fill('Parceiro@123');
  await page.getByRole('button', { name: 'Entrar' }).click();
  await page.waitForTimeout(2000);
  await page.reload();
});

test('Mudar tema', async ({ page }) => {
  await loginDistribuidor(page);
  await page.getByRole('button', {name : 'Configurações de Conta'}).click();
  await page.getByTestId('btn-usersettingsmodal-4').click();
  await page.getByTestId('btn-usersettingsmodal-19').click();
});

test('Abrir Anthera e Criar um curso', async ({ page }) => {
  await loginAdmin(page);
  await page.getByRole('button', { name: 'Cursos' }).click();
  await page.getByRole('button', { name: 'Editar' }).nth(0).click();
  if (await page.isChecked('text=Curso Ativo')) {
    await page.getByRole('checkbox', { name: 'Curso Ativo' }).uncheck();  
    await page.getByRole('button', { name: 'Atualizar' }).click();
  }
});