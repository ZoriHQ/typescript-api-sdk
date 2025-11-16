// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { EventFilterOptionsParams, EventRecentParams, Events } from './events';
import * as RetentionAPI from './retention';
import { Retention, RetentionChurnRateParams, RetentionCohortsParams } from './retention';
import * as SessionsAPI from './sessions';
import { Sessions } from './sessions';
import * as TilesAPI from './tiles';
import {
  TileGetBounceRateParams,
  TileGetBounceRateResponse,
  TileGetDailyActiveUsersParams,
  TileGetDailyActiveUsersResponse,
  TileGetMonthlyActiveUsersParams,
  TileGetMonthlyActiveUsersResponse,
  TileGetPagesPerSessionParams,
  TileGetPagesPerSessionResponse,
  TileGetReturnRateParams,
  TileGetReturnRateResponse,
  TileGetSessionDurationParams,
  TileGetSessionDurationResponse,
  TileGetTimeBetweenVisitsParams,
  TileGetTimeBetweenVisitsResponse,
  TileGetTrafficByCountryParams,
  TileGetTrafficByCountryResponse,
  TileGetTrafficByRefererParams,
  TileGetTrafficByRefererResponse,
  TileGetTrafficByUtmParams,
  TileGetTrafficByUtmResponse,
  TileGetUniqueSessionsParams,
  TileGetUniqueSessionsResponse,
  TileGetUniqueVisitorsParams,
  TileGetUniqueVisitorsResponse,
  TileGetWeeklyActiveUsersParams,
  TileGetWeeklyActiveUsersResponse,
  TileRetrieveVisitorsByBrowserParams,
  TileRetrieveVisitorsByBrowserResponse,
  TileRetrieveVisitorsByOsParams,
  TileRetrieveVisitorsByOsResponse,
  Tiles,
} from './tiles';
import * as UsersAPI from './users';
import { Users } from './users';
import * as VisitorsAPI from './visitors';
import {
  VisitorByDeviceParams,
  VisitorIdentifyParams,
  VisitorProfileParams,
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
  tiles: TilesAPI.Tiles = new TilesAPI.Tiles(this._client);

  /**
   * Get unique visitor counts over time, split by mobile and desktop devices for
   * chart visualization
   *
   * @example
   * ```ts
   * const response = await client.v1.analytics.retrieveTimeline(
   *   { project_id: 'project_id', time_range: 'last_hour' },
   * );
   * ```
   */
  retrieveTimeline(
    query: AnalyticsRetrieveTimelineParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsRetrieveTimelineResponse> {
    return this._client.get('/api/v1/analytics/timeline', { query, ...options });
  }
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

export interface VisitorsByDeviceResponse {
  data?: Array<VisitorDataPoint>;
}

export interface AnalyticsRetrieveTimelineResponse {
  data?: Array<AnalyticsRetrieveTimelineResponse.Data>;

  precision?: 'minutes' | 'hourly' | 'daily' | 'weekly' | 'monthly';

  total_visits?: number;
}

export namespace AnalyticsRetrieveTimelineResponse {
  export interface Data {
    num_desktop_visits?: number;

    num_mobile_visits?: number;

    num_revenue?: number;

    num_unknown_visits?: number;

    time_bucket?: string;
  }
}

export interface AnalyticsRetrieveTimelineParams {
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
Analytics.Tiles = Tiles;

export declare namespace Analytics {
  export {
    type ChurnRateResponse as ChurnRateResponse,
    type CohortAnalysisResponse as CohortAnalysisResponse,
    type CohortData as CohortData,
    type EventFilterOptionsResponse as EventFilterOptionsResponse,
    type EventsOverTimeDataPoint as EventsOverTimeDataPoint,
    type ManualIdentifyRequest as ManualIdentifyRequest,
    type ManualIdentifyResponse as ManualIdentifyResponse,
    type RecentEvent as RecentEvent,
    type RecentEventsResponse as RecentEventsResponse,
    type TopVisitor as TopVisitor,
    type TopVisitorsResponse as TopVisitorsResponse,
    type VisitorDataPoint as VisitorDataPoint,
    type VisitorEvent as VisitorEvent,
    type VisitorProfileResponse as VisitorProfileResponse,
    type VisitorsByDeviceResponse as VisitorsByDeviceResponse,
    type AnalyticsRetrieveTimelineResponse as AnalyticsRetrieveTimelineResponse,
    type AnalyticsRetrieveTimelineParams as AnalyticsRetrieveTimelineParams,
  };

  export {
    Visitors as Visitors,
    type VisitorByDeviceParams as VisitorByDeviceParams,
    type VisitorIdentifyParams as VisitorIdentifyParams,
    type VisitorProfileParams as VisitorProfileParams,
    type VisitorTopParams as VisitorTopParams,
  };

  export {
    Events as Events,
    type EventFilterOptionsParams as EventFilterOptionsParams,
    type EventRecentParams as EventRecentParams,
  };

  export { Sessions as Sessions };

  export { Users as Users };

  export {
    Retention as Retention,
    type RetentionChurnRateParams as RetentionChurnRateParams,
    type RetentionCohortsParams as RetentionCohortsParams,
  };

  export {
    Tiles as Tiles,
    type TileGetBounceRateResponse as TileGetBounceRateResponse,
    type TileGetDailyActiveUsersResponse as TileGetDailyActiveUsersResponse,
    type TileGetMonthlyActiveUsersResponse as TileGetMonthlyActiveUsersResponse,
    type TileGetPagesPerSessionResponse as TileGetPagesPerSessionResponse,
    type TileGetReturnRateResponse as TileGetReturnRateResponse,
    type TileGetSessionDurationResponse as TileGetSessionDurationResponse,
    type TileGetTimeBetweenVisitsResponse as TileGetTimeBetweenVisitsResponse,
    type TileGetTrafficByCountryResponse as TileGetTrafficByCountryResponse,
    type TileGetTrafficByRefererResponse as TileGetTrafficByRefererResponse,
    type TileGetTrafficByUtmResponse as TileGetTrafficByUtmResponse,
    type TileGetUniqueSessionsResponse as TileGetUniqueSessionsResponse,
    type TileGetUniqueVisitorsResponse as TileGetUniqueVisitorsResponse,
    type TileGetWeeklyActiveUsersResponse as TileGetWeeklyActiveUsersResponse,
    type TileRetrieveVisitorsByBrowserResponse as TileRetrieveVisitorsByBrowserResponse,
    type TileRetrieveVisitorsByOsResponse as TileRetrieveVisitorsByOsResponse,
    type TileGetBounceRateParams as TileGetBounceRateParams,
    type TileGetDailyActiveUsersParams as TileGetDailyActiveUsersParams,
    type TileGetMonthlyActiveUsersParams as TileGetMonthlyActiveUsersParams,
    type TileGetPagesPerSessionParams as TileGetPagesPerSessionParams,
    type TileGetReturnRateParams as TileGetReturnRateParams,
    type TileGetSessionDurationParams as TileGetSessionDurationParams,
    type TileGetTimeBetweenVisitsParams as TileGetTimeBetweenVisitsParams,
    type TileGetTrafficByCountryParams as TileGetTrafficByCountryParams,
    type TileGetTrafficByRefererParams as TileGetTrafficByRefererParams,
    type TileGetTrafficByUtmParams as TileGetTrafficByUtmParams,
    type TileGetUniqueSessionsParams as TileGetUniqueSessionsParams,
    type TileGetUniqueVisitorsParams as TileGetUniqueVisitorsParams,
    type TileGetWeeklyActiveUsersParams as TileGetWeeklyActiveUsersParams,
    type TileRetrieveVisitorsByBrowserParams as TileRetrieveVisitorsByBrowserParams,
    type TileRetrieveVisitorsByOsParams as TileRetrieveVisitorsByOsParams,
  };
}
