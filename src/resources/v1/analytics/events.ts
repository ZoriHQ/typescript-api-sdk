// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Events extends APIResource {
  /**
   * Get unique traffic origins, page paths, and event names to populate filter
   * dropdowns
   *
   * @example
   * ```ts
   * const eventFilterOptionsResponse =
   *   await client.v1.analytics.events.filterOptions({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
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
   * external_id, traffic_origin, page_path, event_name)
   *
   * @example
   * ```ts
   * const recentEventsResponse =
   *   await client.v1.analytics.events.recent({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  recent(query: EventRecentParams, options?: RequestOptions): APIPromise<AnalyticsAPI.RecentEventsResponse> {
    return this._client.get('/api/v1/analytics/events/recent', { query, ...options });
  }
}

export interface EventFilterOptionsParams {
  project_id: string;

  time_range: 'last_hour' | 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  customer_id?: string;

  limit?: number;

  offset?: number;

  referrer?: string;

  utmtag?: string;

  utmtagValue?: string;

  visitor_id?: string;
}

export interface EventRecentParams {
  project_id: string;

  time_range: 'last_hour' | 'today' | 'yesterday' | 'last_7_days' | 'last_30_days' | 'last_90_days';

  customer_id?: string;

  event_name?: string;

  external_id?: string;

  limit?: number;

  offset?: number;

  page_path?: string;

  referrer?: string;

  traffic_origin?: string;

  user_id?: string;

  utmtag?: string;

  utmtagValue?: string;

  visitor_id?: string;
}

export declare namespace Events {
  export {
    type EventFilterOptionsParams as EventFilterOptionsParams,
    type EventRecentParams as EventRecentParams,
  };
}
