// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zoriapi from 'zorihq';

const client = new Zoriapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource revenue', () => {
  // Prism tests are disabled
  test.skip('byUtm: only required params', async () => {
    const responsePromise = client.v1.analytics.revenue.byUtm({
      project_id: 'project_id',
      time_range: 'last_hour',
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
  test.skip('byUtm: required and optional params', async () => {
    const response = await client.v1.analytics.revenue.byUtm({
      project_id: 'project_id',
      time_range: 'last_hour',
      utm_type: 'utm_type',
    });
  });

  // Prism tests are disabled
  test.skip('timeline: only required params', async () => {
    const responsePromise = client.v1.analytics.revenue.timeline({
      project_id: 'project_id',
      time_range: 'last_hour',
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
  test.skip('timeline: required and optional params', async () => {
    const response = await client.v1.analytics.revenue.timeline({
      project_id: 'project_id',
      time_range: 'last_hour',
    });
  });
});
