import { test, expect } from '@playwright/test';

test('DELETE /api/verifyLogin deve informar que o método não é suportado', async ({ request }) => {
  const response = await request.delete('/api/verifyLogin');

  const responseBody = await response.json();

  console.log('Status HTTP:', response.status());
  console.log('Corpo da resposta:', responseBody);

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  expect(responseBody).toMatchObject({
    responseCode: 405,
    message: 'This request method is not supported.',
  });
});