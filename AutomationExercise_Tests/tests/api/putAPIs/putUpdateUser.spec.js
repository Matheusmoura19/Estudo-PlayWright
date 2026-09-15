import { test, expect } from '@playwright/test';

test('PUT /api/updateAccount deve atualizar uma conta com dados válidos', async ({ request }) => {
  const requestBody = {
    name: 'Test User',
    email: 'tests_users1@example.com',
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
  };

  const response = await request.put('/api/updateAccount', {
    form: requestBody,
  });

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  expect(await response.json()).toMatchObject({
    responseCode: 201,
    message: 'User updated!',
  });

});