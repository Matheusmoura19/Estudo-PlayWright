import { test, expect } from '@playwright/test';

test('PUT /api/brandsList não deve ser permitido', async ({ request }) => {
  const response = await request.put('/api/brandsList');

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  expect(responseBody.responseCode).toBe(405);
  expect(responseBody.message).toBe('This request method is not supported.');
});