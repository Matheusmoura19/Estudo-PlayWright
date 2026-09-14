import { test, expect } from '@playwright/test';

test('GET /api/productsList deve retornar a lista de produtos', async ({ request }) => {
  const response = await request.get('/api/productsList');

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  expect(responseBody).toBeDefined();
  expect(responseBody.responseCode).toBe(200);
  expect(responseBody.products).toBeDefined();
  expect(Array.isArray(responseBody.products)).toBeTruthy();
  expect(responseBody.products.length).toBeGreaterThan(0);

  console.log('Lista de produtos retornada com sucesso:', responseBody.products);
});