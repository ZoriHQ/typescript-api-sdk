// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zoriapi from 'zorihq';

const client = new Zoriapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Prism tests are disabled
  test.skip('confirmPasswordRecovery: only required params', async () => {
    const responsePromise = client.v1.auth.confirmPasswordRecovery({
      token: 'recovery-token-from-email',
      password: 'NewSecurePassword123!',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('confirmPasswordRecovery: required and optional params', async () => {
    const response = await client.v1.auth.confirmPasswordRecovery({
      token: 'recovery-token-from-email',
      password: 'NewSecurePassword123!',
    });
  });

  // Prism tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.v1.auth.login({
      email: 'user@example.com',
      password: 'SecurePassword123!',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('login: required and optional params', async () => {
    const response = await client.v1.auth.login({
      email: 'user@example.com',
      password: 'SecurePassword123!',
    });
  });

  // Prism tests are disabled
  test.skip('logout: only required params', async () => {
    const responsePromise = client.v1.auth.logout({
      refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('logout: required and optional params', async () => {
    const response = await client.v1.auth.logout({
      refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    });
  });

  // Prism tests are disabled
  test.skip('refreshAccessToken: only required params', async () => {
    const responsePromise = client.v1.auth.refreshAccessToken({
      refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('refreshAccessToken: required and optional params', async () => {
    const response = await client.v1.auth.refreshAccessToken({
      refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    });
  });

  // Prism tests are disabled
  test.skip('registerAccount: only required params', async () => {
    const responsePromise = client.v1.auth.registerAccount({
      email: 'user@example.com',
      organization_name: 'Acme Corporation',
      password: 'SecurePassword123!',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('registerAccount: required and optional params', async () => {
    const response = await client.v1.auth.registerAccount({
      email: 'user@example.com',
      organization_name: 'Acme Corporation',
      password: 'SecurePassword123!',
      first_name: 'John',
      last_name: 'Doe',
    });
  });

  // Prism tests are disabled
  test.skip('requestPasswordRecovery: only required params', async () => {
    const responsePromise = client.v1.auth.requestPasswordRecovery({ email: 'user@example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('requestPasswordRecovery: required and optional params', async () => {
    const response = await client.v1.auth.requestPasswordRecovery({ email: 'user@example.com' });
  });
});
