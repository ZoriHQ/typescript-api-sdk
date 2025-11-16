// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Zoriapi from 'zorihq';

const client = new Zoriapi({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tiles', () => {
  // Prism tests are disabled
  test.skip('getBounceRate: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getBounceRate({
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
  test.skip('getBounceRate: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getBounceRate({
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
  test.skip('getDailyActiveUsers: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getDailyActiveUsers({
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
  test.skip('getDailyActiveUsers: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getDailyActiveUsers({
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
  test.skip('getMonthlyActiveUsers: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getMonthlyActiveUsers({
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
  test.skip('getMonthlyActiveUsers: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getMonthlyActiveUsers({
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
  test.skip('getPagesPerSession: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getPagesPerSession({
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
  test.skip('getPagesPerSession: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getPagesPerSession({
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
  test.skip('getReturnRate: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getReturnRate({
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
  test.skip('getReturnRate: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getReturnRate({
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
  test.skip('getSessionDuration: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getSessionDuration({
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
  test.skip('getSessionDuration: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getSessionDuration({
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
  test.skip('getTimeBetweenVisits: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getTimeBetweenVisits({
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
  test.skip('getTimeBetweenVisits: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getTimeBetweenVisits({
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
  test.skip('getTrafficByCountry: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getTrafficByCountry({
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
  test.skip('getTrafficByCountry: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getTrafficByCountry({
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
  test.skip('getTrafficByReferer: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getTrafficByReferer({
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
  test.skip('getTrafficByReferer: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getTrafficByReferer({
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
  test.skip('getTrafficByUtm: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getTrafficByUtm({
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
  test.skip('getTrafficByUtm: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getTrafficByUtm({
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
  test.skip('getUniqueSessions: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getUniqueSessions({
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
  test.skip('getUniqueSessions: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getUniqueSessions({
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
  test.skip('getUniqueVisitors: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getUniqueVisitors({
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
  test.skip('getUniqueVisitors: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getUniqueVisitors({
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
  test.skip('getWeeklyActiveUsers: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.getWeeklyActiveUsers({
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
  test.skip('getWeeklyActiveUsers: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.getWeeklyActiveUsers({
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
  test.skip('retrieveVisitorsByBrowser: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.retrieveVisitorsByBrowser({
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
  test.skip('retrieveVisitorsByBrowser: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.retrieveVisitorsByBrowser({
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
  test.skip('retrieveVisitorsByOs: only required params', async () => {
    const responsePromise = client.v1.analytics.tiles.retrieveVisitorsByOs({
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
  test.skip('retrieveVisitorsByOs: required and optional params', async () => {
    const response = await client.v1.analytics.tiles.retrieveVisitorsByOs({
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
