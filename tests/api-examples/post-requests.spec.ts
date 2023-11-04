import { test, expect, request } from '@playwright/test';

test('basic post request', async ({ request }) => {
  const response = await request.post('https://api.restful-api.dev/objects',
    {
      data: {
        name: 'Stuff',
        data: {
          foods: ['Apples', 'Pizza'],
          cars: ['F-150', 'Challenger'],
          games: ['Poker', 'Baseball']
        }
      }
    });


  expect(response).toBeOK();
  expect(response.json()).toBeTruthy();
  const responseBody = await response.json();
  expect(responseBody.name).toBe('Stuff');
  expect(responseBody.createdAt).toBeTruthy();
  expect(typeof responseBody.createdAt).toBe('string');
  expect(responseBody.id).toBeTruthy();
  expect(responseBody.data.foods).toEqual(['Apples', 'Pizza']);
  expect(responseBody.data.cars).toEqual(['F-150', 'Challenger']);
  expect(responseBody.data.games).toEqual(['Poker', 'Baseball']);
});