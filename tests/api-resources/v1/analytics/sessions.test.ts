// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zoriapi from 'zorihq';

const client = new Zoriapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  // Prism tests are disabled
  test.skip('bounceRate: only required params', async () => {
    const responsePromise = client.v1.analytics.sessions.bounceRate({
      limit: 1,
      offset: 0,
      projectID: 'projectID',
      timeBoundaries: 'last_hour',
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
  test.skip('bounceRate: required and optional params', async () => {
    const response = await client.v1.analytics.sessions.bounceRate({
      limit: 1,
      offset: 0,
      projectID: 'projectID',
      timeBoundaries: 'last_hour',
      customerID: 'customerID',
      referrer: 'referrer',
      utmtag: 'utmtag',
      utmtagValue: 'utmtagValue',
      visitorID: 'visitorID',
    });
  });

  // Prism tests are disabled
  test.skip('metrics: only required params', async () => {
    const responsePromise = client.v1.analytics.sessions.metrics({
      limit: 1,
      offset: 0,
      projectID: 'projectID',
      timeBoundaries: 'last_hour',
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
  test.skip('metrics: required and optional params', async () => {
    const response = await client.v1.analytics.sessions.metrics({
      limit: 1,
      offset: 0,
      projectID: 'projectID',
      timeBoundaries: 'last_hour',
      customerID: 'customerID',
      referrer: 'referrer',
      utmtag: 'utmtag',
      utmtagValue: 'utmtagValue',
      visitorID: 'visitorID',
    });
  });
});
