// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { EventRecentParams, Events } from './events';
import * as RetentionAPI from './retention';
import {
  Retention,
  RetentionChurnRateParams,
  RetentionCohortsParams,
  RetentionReturnRateParams,
} from './retention';
import * as SessionsAPI from './sessions';
import { SessionBounceRateParams, SessionMetricsParams, Sessions } from './sessions';
import * as UsersAPI from './users';
import { UserActiveParams, Users } from './users';
import * as VisitorsAPI from './visitors';
import {
  VisitorByCountryParams,
  VisitorByDeviceParams,
  VisitorByOriginParams,
  VisitorProfileParams,
  VisitorTimelineParams,
  VisitorTopParams,
  Visitors,
} from './visitors';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Analytics extends APIResource {
  visitors: VisitorsAPI.Visitors = new VisitorsAPI.Visitors(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  retention: RetentionAPI.Retention = new RetentionAPI.Retention(this._client);

  /**
   * Get combined key metrics including sessions, active users, bounce rate, and
   * retention for dashboard display
   *
   * @example
   * ```ts
   * const dashboardMetricsResponse =
   *   await client.v1.analytics.dashboard({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  dashboard(query: AnalyticsDashboardParams, options?: RequestOptions): APIPromise<DashboardMetricsResponse> {
    return this._client.get('/api/v1/analytics/dashboard', { query, ...options });
  }
}

export interface ActiveUsersResponse {
  dau?: number;

  mau?: number;

  wau?: number;
}

export interface BounceRateByPageMetric {
  bounce_rate?: number;

  page?: string;

  sessions?: number;
}

export interface BounceRateResponse {
  by_page?: Array<BounceRateByPageMetric>;

  overall_bounce_rate?: number;
}

export interface ChurnRateResponse {
  churn_rate_percent?: number;

  churn_threshold_days?: number;

  churned_users?: number;

  total_users?: number;
}

export interface CohortAnalysisResponse {
  cohorts?: Array<CohortData>;
}

export interface CohortData {
  cohort_period?: string;

  cohort_size?: number;

  month_1_retention?: number;

  month_2_retention?: number;

  month_3_retention?: number;

  week_1_retention?: number;

  week_2_retention?: number;

  week_4_retention?: number;
}

export interface CountryDataPoint {
  country_code?: string;

  percentage?: number;

  unique_visitors?: number;
}

export interface DashboardMetricsResponse {
  avg_pages_per_session?: number;

  avg_session_duration_seconds?: number;

  /**
   * Engagement metrics
   */
  bounce_rate?: number;

  /**
   * Active users
   */
  dau?: number;

  mau?: number;

  return_rate?: number;

  /**
   * Sessions
   */
  sessions_today?: number;

  /**
   * Total metrics
   */
  total_events?: number;

  total_sessions_in_period?: number;

  unique_visitors?: number;

  wau?: number;
}

export interface EventsOverTimeDataPoint {
  event_count?: number;

  timestamp?: string;
}

export interface OriginDataPoint {
  origin?: string;

  percentage?: number;

  unique_visitors?: number;
}

export interface RecentEvent {
  browser_name?: string;

  client_timestamp_utc?: string;

  device_type?: string;

  event_name?: string;

  location_city?: string;

  location_country_iso?: string;

  page_path?: string;

  page_url?: string;

  referrer_url?: string;

  visitor_id?: string;
}

export interface RecentEventsResponse {
  events?: Array<RecentEvent>;

  total?: number;
}

export interface ReturnRateResponse {
  avg_time_between_sessions_hours?: number;

  return_rate_percent?: number;

  returning_users?: number;

  total_users?: number;
}

export interface SessionMetricsResponse {
  average_pages_per_session?: number;

  average_session_duration_seconds?: number;

  total_sessions?: number;
}

export interface TopVisitor {
  browser_name?: string;

  device_type?: string;

  event_count?: number;

  first_seen?: string;

  last_seen?: string;

  location_city?: string;

  location_country_iso?: string;

  visitor_id?: string;
}

export interface TopVisitorsResponse {
  total?: number;

  visitors?: Array<TopVisitor>;
}

export interface UniqueVisitorsDataPoint {
  desktop?: number;

  mobile?: number;

  timestamp?: string;
}

export interface UniqueVisitorsTimelineResponse {
  data?: Array<UniqueVisitorsDataPoint>;
}

export interface VisitorDataPoint {
  desktop?: number;

  mobile?: number;

  timestamp?: string;

  unknown?: number;
}

export interface VisitorEvent {
  browser_name?: string;

  client_timestamp_utc?: string;

  device_type?: string;

  event_name?: string;

  page_path?: string;

  page_url?: string;

  referrer_url?: string;
}

export interface VisitorProfileResponse {
  events?: Array<VisitorEvent>;

  events_over_time?: Array<EventsOverTimeDataPoint>;

  first_referrer_url?: string;

  first_seen?: string;

  first_traffic_origin?: string;

  last_seen?: string;

  location_city?: string;

  location_country_iso?: string;

  total_events?: number;

  visitor_id?: string;
}

export interface VisitorsByCountryResponse {
  data?: Array<CountryDataPoint>;
}

export interface VisitorsByDeviceResponse {
  data?: Array<VisitorDataPoint>;
}

export interface VisitorsByOriginResponse {
  data?: Array<OriginDataPoint>;
}

export interface AnalyticsDashboardParams {
  /**
   * Project ID
   */
  project_id: string;

  /**
   * Time range
   */
  time_range: 'last_hour' | 'today' | 'last_7_days' | 'last_30_days' | 'last_90_days';
}

Analytics.Visitors = Visitors;
Analytics.Events = Events;
Analytics.Sessions = Sessions;
Analytics.Users = Users;
Analytics.Retention = Retention;

export declare namespace Analytics {
  export {
    type ActiveUsersResponse as ActiveUsersResponse,
    type BounceRateByPageMetric as BounceRateByPageMetric,
    type BounceRateResponse as BounceRateResponse,
    type ChurnRateResponse as ChurnRateResponse,
    type CohortAnalysisResponse as CohortAnalysisResponse,
    type CohortData as CohortData,
    type CountryDataPoint as CountryDataPoint,
    type DashboardMetricsResponse as DashboardMetricsResponse,
    type EventsOverTimeDataPoint as EventsOverTimeDataPoint,
    type OriginDataPoint as OriginDataPoint,
    type RecentEvent as RecentEvent,
    type RecentEventsResponse as RecentEventsResponse,
    type ReturnRateResponse as ReturnRateResponse,
    type SessionMetricsResponse as SessionMetricsResponse,
    type TopVisitor as TopVisitor,
    type TopVisitorsResponse as TopVisitorsResponse,
    type UniqueVisitorsDataPoint as UniqueVisitorsDataPoint,
    type UniqueVisitorsTimelineResponse as UniqueVisitorsTimelineResponse,
    type VisitorDataPoint as VisitorDataPoint,
    type VisitorEvent as VisitorEvent,
    type VisitorProfileResponse as VisitorProfileResponse,
    type VisitorsByCountryResponse as VisitorsByCountryResponse,
    type VisitorsByDeviceResponse as VisitorsByDeviceResponse,
    type VisitorsByOriginResponse as VisitorsByOriginResponse,
    type AnalyticsDashboardParams as AnalyticsDashboardParams,
  };

  export {
    Visitors as Visitors,
    type VisitorByCountryParams as VisitorByCountryParams,
    type VisitorByDeviceParams as VisitorByDeviceParams,
    type VisitorByOriginParams as VisitorByOriginParams,
    type VisitorProfileParams as VisitorProfileParams,
    type VisitorTimelineParams as VisitorTimelineParams,
    type VisitorTopParams as VisitorTopParams,
  };

  export { Events as Events, type EventRecentParams as EventRecentParams };

  export {
    Sessions as Sessions,
    type SessionBounceRateParams as SessionBounceRateParams,
    type SessionMetricsParams as SessionMetricsParams,
  };

  export { Users as Users, type UserActiveParams as UserActiveParams };

  export {
    Retention as Retention,
    type RetentionChurnRateParams as RetentionChurnRateParams,
    type RetentionCohortsParams as RetentionCohortsParams,
    type RetentionReturnRateParams as RetentionReturnRateParams,
  };
}
