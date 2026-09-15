import { test, expect } from '@playwright/test';
import { Email } from '../../../helpers/testCredentials';

test('GET /api/getUserDetailByEmail deve retornar os detalhes do usuário pelo email', async ({ request }) => {
  const response = await request.get('/api/getUserDetailByEmail', {
    params: {
      email: Email,
    },
  });

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  expect(responseBody).toBeDefined();
  expect(responseBody.responseCode).toBe(200);
  expect(responseBody.user).toBeDefined();
  expect(responseBody.user.email).toBe(Email);

  console.log('Detalhes do usuário retornados com sucesso:',responseBody.user);
});