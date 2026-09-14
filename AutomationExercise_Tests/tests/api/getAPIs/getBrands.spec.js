import { test, expect } from '@playwright/test';

test('GET /api/brandsList deve retornar a lista de marcas', async ({ request }) => {
  const response = await request.get('/api/brandsList');

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  expect(responseBody).toBeDefined();
  expect(responseBody.responseCode).toBe(200);
  expect(responseBody.brands).toBeDefined();
  expect(Array.isArray(responseBody.brands)).toBeTruthy();
  expect(responseBody.brands.length).toBeGreaterThan(0);

  console.log('Lista de marcas retornada com sucesso:', responseBody.brands);
});