import { test, expect, request } from '@playwright/test';


test('basic get request', async ({ request }) => {
  const response = await request.get('https://api.restful-api.dev/objects');
  expect(response).toBeOK();
  expect(response.json()).toBeTruthy();
});
