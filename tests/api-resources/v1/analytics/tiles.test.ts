// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zoriapi from 'zorihq';

const client = new Zoriapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tiles', () => {
  // Prism tests are disabled
  test.skip('bounceRate: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.bounceRate({
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
  test.skip('bounceRate: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.bounceRate({
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
  test.skip('dau: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.dau({
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
  test.skip('dau: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.dau({
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
  test.skip('entryPages: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.entryPages({
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
  test.skip('entryPages: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.entryPages({
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
  test.skip('exitPages: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.exitPages({
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
  test.skip('exitPages: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.exitPages({
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
  test.skip('mau: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.mau({
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
  test.skip('mau: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.mau({
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
  test.skip('pagesPerSession: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.pagesPerSession({
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
  test.skip('pagesPerSession: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.pagesPerSession({
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
  test.skip('returnRate: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.returnRate({
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
    const response = await client.v1.analytics.tiles.returnRate({
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
  test.skip('sessionDuration: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.sessionDuration({
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
  test.skip('sessionDuration: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.sessionDuration({
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
  test.skip('timeBetweenVisits: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.timeBetweenVisits({
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
  test.skip('timeBetweenVisits: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.timeBetweenVisits({
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
  test.skip('trafficByCountry: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.trafficByCountry({
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
  test.skip('trafficByCountry: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.trafficByCountry({
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
  test.skip('trafficByReferer: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.trafficByReferer({
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
  test.skip('trafficByReferer: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.trafficByReferer({
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
  test.skip('trafficByUtm: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.trafficByUtm({
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
  test.skip('trafficByUtm: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.trafficByUtm({
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
  test.skip('uniqueSessions: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.uniqueSessions({
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
  test.skip('uniqueSessions: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.uniqueSessions({
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
  test.skip('uniqueVisitors: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.uniqueVisitors({
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
  test.skip('uniqueVisitors: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.uniqueVisitors({
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
  test.skip('visitorsByBrowser: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.visitorsByBrowser({
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
  test.skip('visitorsByBrowser: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.visitorsByBrowser({
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
  test.skip('visitorsByOs: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.visitorsByOs({
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
  test.skip('visitorsByOs: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.visitorsByOs({
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
  test.skip('wau: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.wau({
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
  test.skip('wau: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.wau({
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
