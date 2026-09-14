import { test, expect } from '@playwright/test';
import { Email, Password } from '../../../helpers/testCredentials';

test('POST /api/verifyLogin deve verificar login com dados válidos', async ({ request }) => {
  const requestBody = {
    email: Email,
    password: Password,
  };

  const response = await request.post('/api/verifyLogin', {
    form: requestBody,
  });

  const responseBody = await response.json();

  console.log('Status HTTP:', response.status());
  console.log('Corpo da resposta:', responseBody);
  console.log('Código da aplicação:', responseBody.responseCode);
  console.log('Mensagem:', responseBody.message);

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  expect(responseBody).toMatchObject({
    responseCode: 200,
    message: 'User exists!',
  });
});

test('POST /api/verifyLogin sem email deve retornar erro 400', async ({ request }) => {
  const requestBody = {
    password: Password,
  };

  const response = await request.post('/api/verifyLogin', {
    form: requestBody,
  });

  const responseBody = await response.json();

  console.log('Status HTTP:', response.status());
  console.log('Corpo da resposta:', responseBody);

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  expect(responseBody).toMatchObject({
    responseCode: 400,
    message:
      'Bad request, email or password parameter is missing in POST request.',
  });
});