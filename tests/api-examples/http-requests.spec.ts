import { test, expect, request } from '@playwright/test';


test('basic get request', async ({ request }) => {
  const response = await request.get('https://api.restful-api.dev/objects');
  expect(response.ok()).toBeTruthy();
});

test('basic post request', async ({ request }) => {
  const response = await request.post('https://api.restful-api.dev/objects',
    {
      data: {
        name: "Stuff",
        data: {
          foods: ["Apples", "Pizza"],
          cars: ["F-150", "Challenger"],
          games: ["Poker", "Baseball"]
        }
      }
    });

  expect(response.ok()).toBeTruthy();
});