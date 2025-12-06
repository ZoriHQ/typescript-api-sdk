// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zoriapi from 'zorihq';

const client = new Zoriapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource llm', () => {
  // Prism tests are disabled
  test.skip('traces: only required params', async () => {
    const responsePromise = client.v1.analytics.llm.traces({
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
  test.skip('traces: required and optional params', async () => {
    const response = await client.v1.analytics.llm.traces({
      project_id: 'project_id',
      time_range: 'last_hour',
      customer_id: 'customer_id',
      limit: 1,
      model: 'model',
      name: 'name',
      offset: 0,
      referrer: 'referrer',
      session_id: 'session_id',
      user_id: 'user_id',
      utmtag: 'utmtag',
      utmtagValue: 'utmtagValue',
      visitor_id: 'visitor_id',
    });
  });

  // Prism tests are disabled
  test.skip('tracesFilterOptions: only required params', async () => {
    const responsePromise = client.v1.analytics.llm.tracesFilterOptions({
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
  test.skip('tracesFilterOptions: required and optional params', async () => {
    const response = await client.v1.analytics.llm.tracesFilterOptions({
      project_id: 'project_id',
      time_range: 'last_hour',
      customer_id: 'customer_id',
      limit: 1,
      offset: 0,
      referrer: 'referrer',
      utmtag: 'utmtag',
      utmtagValue: 'utmtagValue',
      visitor_id: 'visitor_id',
    });
  });
});
