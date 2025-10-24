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
   *     project_id: 'project_id',
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
   *     project_id: 'project_id',
   *   });
   * ```
   */
  recent(query: EventRecentParams, options?: RequestOptions): APIPromise<AnalyticsAPI.RecentEventsResponse> {
    return this._client.get('/api/v1/analytics/events/recent', { query, ...options });
  }
}

export interface EventFilterOptionsParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range?: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

export interface EventRecentParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Filter by external ID
   */
  external_id?: string;

  /**
   * Maximum number of events to return (default: 15)
   */
  limit?: number;

  /**
   * Offset for pagination (default: 0)
   */
  offset?: number;

  /**
   * Filter by page path
   */
  page_path?: string;

  /**
   * Filter by traffic origin (referrer domain)
   */
  traffic_origin?: string;

  /**
   * Filter by user ID
   */
  user_id?: string;

  /**
   * Filter by visitor ID
   */
  visitor_id?: string;
}

export declare namespace Events {
  export {
    type EventFilterOptionsParams as EventFilterOptionsParams,
    type EventRecentParams as EventRecentParams,
  };
}
