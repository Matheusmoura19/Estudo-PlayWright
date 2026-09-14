import { test, expect } from '@playwright/test';

test('POST /api/searchProduct deve procurar um produto', async ({ request }) => {
  const searchProduct = 'tshirt';

  const response = await request.post('/api/searchProduct', {
    form: {
      search_product: searchProduct,
    },
  });

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  expect(responseBody.responseCode).toBe(200);
  expect(Array.isArray(responseBody.products)).toBeTruthy();
  expect(responseBody.products.length).toBeGreaterThan(0);

  const foundProduto = responseBody.products.some(product =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  expect(foundProduto).toBeTruthy();
});

test('POST /api/searchProduct sem search_product deve retornar erro 400', async ({ request }) => {
  const response = await request.post('/api/searchProduct');

  const responseBody = await response.json();

  expect(response.status()).toBe(200);

  expect(responseBody).toMatchObject({
    responseCode: 400,
    message:
      'Bad request, search_product parameter is missing in POST request.',
  });
});