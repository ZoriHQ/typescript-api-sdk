// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Events extends APIResource {
  /**
   * Get unique traffic origins and page paths to populate filter dropdowns
   *
   * @example
   * ```ts
   * const eventFilterOptionsResponse =
   *   await client.v1.analytics.events.filterOptions({
   *     limit: 1,
   *     offset: 0,
   *     projectID: 'projectID',
   *     timeBoundaries: 'last_hour',
   *   });
   * ```
   */
  filterOptions(
    query: EventFilterOptionsParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsAPI.EventFilterOptionsResponse> {
    return this._client.get('/api/v1/analytics/events/filter-options', { query, ...options });
  }

  /**
   * Get a list of recent events with optional filters (visitor_id, user_id,
   * external_id, traffic_origin, page_path)
   *
   * @example
   * ```ts
   * const recentEventsResponse =
   *   await client.v1.analytics.events.recent({
   *     limit: 1,
   *     offset: 0,
   *     projectID: 'projectID',
   *     timeBoundaries: 'last_hour',
   *   });
   * ```
   */
  recent(query: EventRecentParams, options?: RequestOptions): APIPromise<AnalyticsAPI.RecentEventsResponse> {
    return this._client.get('/api/v1/analytics/events/recent', { query, ...options });
  }
}

export interface EventFilterOptionsParams {
  limit: number;

  offset: number;

  projectID: string;

  timeBoundaries: 'last_hour' | 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  customerID?: string;

  referrer?: string;

  utmtag?: string;

  utmtagValue?: string;

  visitorID?: string;
}

export interface EventRecentParams {
  limit: number;

  offset: number;

  projectID: string;

  timeBoundaries: 'last_hour' | 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  customerID?: string;

  externalID?: string;

  pagePath?: string;

  referrer?: string;

  trafficOrigin?: string;

  userID?: string;

  utmtag?: string;

  utmtagValue?: string;

  visitorID?: string;
}

export declare namespace Events {
  export {
    type EventFilterOptionsParams as EventFilterOptionsParams,
    type EventRecentParams as EventRecentParams,
  };
}
