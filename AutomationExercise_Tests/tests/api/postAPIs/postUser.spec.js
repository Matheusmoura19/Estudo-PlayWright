import { test, expect } from '@playwright/test';

test('PUT /api/updateAccount deve atualizar uma conta com dados válidos', async ({ request }) => {
  const email = `test_user_${Date.now()}@example.com`;

  await request.post('/api/createAccount', {
    form: {
      name: 'Test User',
      email,
      password: '12345678',
      title: 'Mr',
      birth_date: '15',
      birth_month: '06',
      birth_year: '1990',
      firstname: 'Test',
      lastname: 'User',
      company: 'Example Inc',
      address1: '123 Main St',
      address2: 'Apt 4B',
      country: 'USA',
      zipcode: '12345',
      state: 'NY',
      city: 'New York',
      mobile_number: '1234567890',
    },
  });

  const requestBody = {
    name: 'Test User Updated',
    email,
    password: '12345678',
    title: 'Mr',
    birth_date: '15',
    birth_month: '06',
    birth_year: '1990',
    firstname: 'Test',
    lastname: 'User Updated',
    company: 'Example Inc Updated',
    address1: '456 Main St',
    address2: 'Apt 10A',
    country: 'USA',
    zipcode: '54321',
    state: 'CA',
    city: 'Los Angeles',
    mobile_number: '9999999999',
  };

  const response = await request.put('/api/updateAccount', {
    form: requestBody,
  });

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  expect(await response.json()).toMatchObject({
    responseCode: 200,
    message: 'User updated!',
  });
});