// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zoriapi from 'zorihq';

const client = new Zoriapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource visitors', () => {
  // Prism tests are disabled
  test.skip('byCountry: only required params', async () => {
    const responsePromise = client.v1.analytics.visitors.byCountry({
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
  test.skip('byCountry: required and optional params', async () => {
    const response = await client.v1.analytics.visitors.byCountry({
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

  // Prism tests are disabled
  test.skip('byDevice: only required params', async () => {
    const responsePromise = client.v1.analytics.visitors.byDevice({
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
  test.skip('byDevice: required and optional params', async () => {
    const response = await client.v1.analytics.visitors.byDevice({
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

  // Prism tests are disabled
  test.skip('byOrigin: only required params', async () => {
    const responsePromise = client.v1.analytics.visitors.byOrigin({
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
  test.skip('byOrigin: required and optional params', async () => {
    const response = await client.v1.analytics.visitors.byOrigin({
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

  // Prism tests are disabled
  test.skip('identify: only required params', async () => {
    const responsePromise = client.v1.analytics.visitors.identify({
      project_id: 'project_id',
      visitor_id: 'visitor_id',
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
  test.skip('identify: required and optional params', async () => {
    const response = await client.v1.analytics.visitors.identify({
      project_id: 'project_id',
      visitor_id: 'visitor_id',
      additional_properties: { foo: 'bar' },
      email: 'email',
      external_id: 'external_id',
      name: 'name',
      phone: 'phone',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('profile: only required params', async () => {
    const responsePromise = client.v1.analytics.visitors.profile({ project_id: 'project_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('profile: required and optional params', async () => {
    const response = await client.v1.analytics.visitors.profile({
      project_id: 'project_id',
      customer_id: 'customer_id',
      visitor_id: 'visitor_id',
    });
  });

  // Prism tests are disabled
  test.skip('timeline: only required params', async () => {
    const responsePromise = client.v1.analytics.visitors.timeline({
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
    const response = await client.v1.analytics.visitors.timeline({
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

  // Prism tests are disabled
  test.skip('top: only required params', async () => {
    const responsePromise = client.v1.analytics.visitors.top({
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
  test.skip('top: required and optional params', async () => {
    const response = await client.v1.analytics.visitors.top({
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
