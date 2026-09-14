import { test, expect } from '@playwright/test';

test('POST /api/productsList não deve ser permitido', async ({ request }) => {
  const response = await request.post('/api/productsList');

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  expect(responseBody.responseCode).toBe(405);
  expect(responseBody.message).toBe('This request method is not supported.');
});