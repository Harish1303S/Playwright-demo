import { APIRequestContext, expect } from '@playwright/test';
import { AuthResponse } from './trust';
/**
 * Calls POST /auth to get a token.
 * This token is required (as a cookie) for PUT, PATCH, and DELETE on /booking/{id}.
 */
export async function getAuthToken(request: APIRequestContext): Promise<string> {
  const response = await request.post('/auth', {
    data: {
      username: 'admin',
      password: 'password123',
    },
  });

  expect(response.status()).toBe(200);
  const body: AuthResponse = await response.json();
  expect(body.token).toBeTruthy();

  return body.token;
}
