// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zoriapi from 'zorihq';

const client = new Zoriapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource retention', () => {
  // Prism tests are disabled
  test.skip('churnRate: only required params', async () => {
    const responsePromise = client.v1.analytics.retention.churnRate({
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
  test.skip('churnRate: required and optional params', async () => {
    const response = await client.v1.analytics.retention.churnRate({
      project_id: 'project_id',
      time_range: 'last_hour',
      churn_threshold_days: 0,
    });
  });

  // Prism tests are disabled
  test.skip('cohorts: only required params', async () => {
    const responsePromise = client.v1.analytics.retention.cohorts({
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
  test.skip('cohorts: required and optional params', async () => {
    const response = await client.v1.analytics.retention.cohorts({
      project_id: 'project_id',
      time_range: 'last_hour',
    });
  });

  // Prism tests are disabled
  test.skip('returnRate: only required params', async () => {
    const responsePromise = client.v1.analytics.retention.returnRate({
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
  test.skip('returnRate: required and optional params', async () => {
    const response = await client.v1.analytics.retention.returnRate({
      project_id: 'project_id',
      time_range: 'last_hour',
    });
  });
});
