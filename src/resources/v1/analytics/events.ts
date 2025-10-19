// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Events extends APIResource {
  /**
   * Get a list of the most recent events (default: 15 events)
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

export interface EventRecentParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Maximum number of events to return (default: 15)
   */
  limit?: number;
}

export declare namespace Events {
  export { type EventRecentParams as EventRecentParams };
}
