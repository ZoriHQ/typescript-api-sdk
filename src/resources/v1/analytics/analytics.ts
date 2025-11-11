// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { EventFilterOptionsParams, EventRecentParams, Events } from './events';
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
  VisitorIdentifyParams,
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

  bounce_rate?: number;

  dau?: number;

  mau?: number;

  return_rate?: number;

  sessions_today?: number;

  total_events?: number;

  total_sessions_in_period?: number;

  unique_sessions?: number;

  unique_visitors?: number;

  wau?: number;
}

export interface EventFilterOptionsResponse {
  event_names?: Array<string>;

  pages?: Array<string>;

  traffic_origins?: Array<string>;
}

export interface EventsOverTimeDataPoint {
  event_count?: number;

  timestamp?: string;
}

export interface ManualIdentifyRequest {
  project_id: string;

  visitor_id: string;

  additional_properties?: { [key: string]: unknown };

  email?: string;

  external_id?: string;

  name?: string;

  phone?: string;

  user_id?: string;
}

export interface ManualIdentifyResponse {
  message?: string;

  success?: boolean;

  visitor_id?: string;
}

export interface OriginDataPoint {
  origin?: string;

  percentage?: number;

  unique_visitors?: number;
}

export interface RecentEvent {
  browser_name?: string;

  click_element_category?: string;

  click_element_selector?: string;

  click_element_tag?: string;

  click_element_text?: string;

  click_element_type?: string;

  click_position_x?: number;

  click_position_y?: number;

  click_screen_height?: number;

  click_screen_width?: number;

  client_timestamp_utc?: string;

  device_type?: string;

  event_name?: string;

  external_id?: string;

  is_cta_click?: boolean;

  is_download_link?: boolean;

  is_external_link?: boolean;

  link_destination?: string;

  location_city?: string;

  location_country_iso?: string;

  location_latitude?: number;

  location_longitude?: number;

  page_path?: string;

  page_url?: string;

  referrer_domain?: string;

  referrer_url?: string;

  user_id?: string;

  visitor_id?: string;
}

export interface RecentEventsResponse {
  events?: Array<RecentEvent>;

  limit?: number;

  offset?: number;

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

  currency?: string;

  device_type?: string;

  distinct_payments?: number;

  email?: string;

  event_count?: number;

  external_id?: string;

  first_payment_date?: string;

  first_seen?: string;

  is_grouped?: boolean;

  last_seen?: string;

  location_city?: string;

  location_country_iso?: string;

  name?: string;

  time_to_first_purchase_seconds?: number;

  total_revenue?: number;

  user_id?: string;

  visitor_ids?: Array<string>;
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

  click_element_category?: string;

  click_element_selector?: string;

  click_element_tag?: string;

  click_element_text?: string;

  click_element_type?: string;

  click_position_x?: number;

  click_position_y?: number;

  click_screen_height?: number;

  click_screen_width?: number;

  client_timestamp_utc?: string;

  device_type?: string;

  event_name?: string;

  is_cta_click?: boolean;

  is_download_link?: boolean;

  is_external_link?: boolean;

  link_destination?: string;

  page_path?: string;

  page_url?: string;

  referrer_url?: string;
}

export interface VisitorProfileResponse {
  custom_traits?: { [key: string]: unknown };

  email?: string;

  events?: Array<VisitorEvent>;

  events_over_time?: Array<EventsOverTimeDataPoint>;

  external_id?: string;

  first_identified_at?: string;

  first_referrer_url?: string;

  first_seen?: string;

  first_traffic_origin?: string;

  is_identified?: boolean;

  last_identified_at?: string;

  last_seen?: string;

  location_city?: string;

  location_country_iso?: string;

  name?: string;

  phone?: string;

  total_events?: number;

  user_id?: string;

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
    type EventFilterOptionsResponse as EventFilterOptionsResponse,
    type EventsOverTimeDataPoint as EventsOverTimeDataPoint,
    type ManualIdentifyRequest as ManualIdentifyRequest,
    type ManualIdentifyResponse as ManualIdentifyResponse,
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
    type VisitorIdentifyParams as VisitorIdentifyParams,
    type VisitorProfileParams as VisitorProfileParams,
    type VisitorTimelineParams as VisitorTimelineParams,
    type VisitorTopParams as VisitorTopParams,
  };

  export {
    Events as Events,
    type EventFilterOptionsParams as EventFilterOptionsParams,
    type EventRecentParams as EventRecentParams,
  };

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
