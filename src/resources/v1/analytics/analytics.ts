// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EventsAPI from './events';
import { EventFilterOptionsParams, EventRecentParams, Events } from './events';
import * as RetentionAPI from './retention';
import { Retention, RetentionChurnRateParams, RetentionCohortsParams } from './retention';
import * as TilesAPI from './tiles';
import {
  TileBounceRateParams,
  TileDauParams,
  TileEntryPagesParams,
  TileExitPagesParams,
  TileMauParams,
  TilePagesPerSessionParams,
  TileReturnRateParams,
  TileSessionDurationParams,
  TileTimeBetweenVisitsParams,
  TileTrafficByCountryParams,
  TileTrafficByRefererParams,
  TileTrafficByUtmParams,
  TileUniqueSessionsParams,
  TileUniqueVisitorsParams,
  TileVisitorsByBrowserParams,
  TileVisitorsByOsParams,
  TileWauParams,
  Tiles,
} from './tiles';
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
  tiles: TilesAPI.Tiles = new TilesAPI.Tiles(this._client);
  retention: RetentionAPI.Retention = new RetentionAPI.Retention(this._client);

  /**
   * Get unique visitor counts over time, split by mobile and desktop devices for
   * chart visualization
   *
   * @example
   * ```ts
   * const timelineTileResponse =
   *   await client.v1.analytics.timeline({
   *     project_id: 'project_id',
   *     time_range: 'last_hour',
   *   });
   * ```
   */
  timeline(query: AnalyticsTimelineParams, options?: RequestOptions): APIPromise<TimelineTileResponse> {
    return this._client.get('/api/v1/analytics/timeline', { query, ...options });
  }
}

export interface BounceRateResponse {
  previous_rate?: number;

  rate?: number;
}

export type CardPrecision = 'minutes' | 'hourly' | 'daily' | 'weekly' | 'monthly';

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

export interface CountryTrafficSourceData {
  count?: number;

  country?: string;

  previous_count?: number;
}

export interface CountryTrafficSourceResponse {
  data?: Array<CountryTrafficSourceData>;
}

export interface DauResponse {
  count?: number;

  previous_count?: number;
}

export interface EntryPagesData {
  count?: number;

  page?: string;

  previous_count?: number;
}

export interface EntryPagesResponse {
  data?: Array<EntryPagesData>;
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

export interface ExitPagesData {
  count?: number;

  page?: string;

  previous_count?: number;
}

export interface ExitPagesResponse {
  data?: Array<ExitPagesData>;
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

export interface MauResponse {
  count?: number;

  previous_count?: number;
}

export interface PagesPerSessionResponse {
  avg_pages?: number;

  previous_avg_pages?: number;
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

export interface RefererTrafficSourceData {
  count?: number;

  previous_count?: number;

  previous_revenue?: number;

  referer_url?: string;

  revenue?: number;
}

export interface RefererTrafficSourceResponse {
  data?: Array<RefererTrafficSourceData>;
}

export interface ReturnRateResponse {
  previous_rate?: number;

  rate?: number;
}

export interface SessionDurationResponse {
  avg_duration?: number;

  previous_avg_duration?: number;
}

export interface TimeBetweenVisitsResponse {
  avg_hours?: number;

  previous_avg_hours?: number;
}

export interface TimelineTileData {
  num_desktop_visits?: number;

  num_mobile_visits?: number;

  num_revenue?: number;

  num_unknown_visits?: number;

  time_bucket?: string;
}

export interface TimelineTileResponse {
  data?: Array<TimelineTileData>;

  precision?: CardPrecision;

  total_visits?: number;
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

export interface UniqueSessionsResponse {
  count?: number;

  previous_count?: number;
}

export interface UniqueVisitorsResponse {
  count?: number;

  previous_count?: number;
}

export interface UtmTrafficSourceResponse {
  data?: Array<UtmTrafficSourceResponse.Data>;
}

export namespace UtmTrafficSourceResponse {
  export interface Data {
    count?: number;

    previous_count?: number;

    previous_revenue?: number;

    revenue?: number;

    utm_campaign?: string;

    utm_medium?: string;

    utm_source?: string;
  }
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

export interface VisitorsByBrowserResponse {
  data?: Array<VisitorsByBrowserResponse.Data>;
}

export namespace VisitorsByBrowserResponse {
  export interface Data {
    browser_name?: string;

    count?: number;

    previous_count?: number;
  }
}

export interface VisitorsByDeviceResponse {
  data?: Array<VisitorDataPoint>;
}

export interface VisitorsByOsResponse {
  data?: Array<VisitorsByOsResponse.Data>;
}

export namespace VisitorsByOsResponse {
  export interface Data {
    count?: number;

    os_name?: string;

    previous_count?: number;
  }
}

export interface WauResponse {
  count?: number;

  previous_count?: number;
}

export interface AnalyticsTimelineParams {
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
Analytics.Tiles = Tiles;
Analytics.Retention = Retention;

export declare namespace Analytics {
  export {
    type BounceRateResponse as BounceRateResponse,
    type CardPrecision as CardPrecision,
    type ChurnRateResponse as ChurnRateResponse,
    type CohortAnalysisResponse as CohortAnalysisResponse,
    type CohortData as CohortData,
    type CountryTrafficSourceData as CountryTrafficSourceData,
    type CountryTrafficSourceResponse as CountryTrafficSourceResponse,
    type DauResponse as DauResponse,
    type EntryPagesData as EntryPagesData,
    type EntryPagesResponse as EntryPagesResponse,
    type EventFilterOptionsResponse as EventFilterOptionsResponse,
    type EventsOverTimeDataPoint as EventsOverTimeDataPoint,
    type ExitPagesData as ExitPagesData,
    type ExitPagesResponse as ExitPagesResponse,
    type ManualIdentifyRequest as ManualIdentifyRequest,
    type ManualIdentifyResponse as ManualIdentifyResponse,
    type MauResponse as MauResponse,
    type PagesPerSessionResponse as PagesPerSessionResponse,
    type RecentEvent as RecentEvent,
    type RecentEventsResponse as RecentEventsResponse,
    type RefererTrafficSourceData as RefererTrafficSourceData,
    type RefererTrafficSourceResponse as RefererTrafficSourceResponse,
    type ReturnRateResponse as ReturnRateResponse,
    type SessionDurationResponse as SessionDurationResponse,
    type TimeBetweenVisitsResponse as TimeBetweenVisitsResponse,
    type TimelineTileData as TimelineTileData,
    type TimelineTileResponse as TimelineTileResponse,
    type TopVisitor as TopVisitor,
    type TopVisitorsResponse as TopVisitorsResponse,
    type UniqueSessionsResponse as UniqueSessionsResponse,
    type UniqueVisitorsResponse as UniqueVisitorsResponse,
    type UtmTrafficSourceResponse as UtmTrafficSourceResponse,
    type VisitorDataPoint as VisitorDataPoint,
    type VisitorEvent as VisitorEvent,
    type VisitorProfileResponse as VisitorProfileResponse,
    type VisitorsByBrowserResponse as VisitorsByBrowserResponse,
    type VisitorsByDeviceResponse as VisitorsByDeviceResponse,
    type VisitorsByOsResponse as VisitorsByOsResponse,
    type WauResponse as WauResponse,
    type AnalyticsTimelineParams as AnalyticsTimelineParams,
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

  export {
    Tiles as Tiles,
    type TileBounceRateParams as TileBounceRateParams,
    type TileDauParams as TileDauParams,
    type TileEntryPagesParams as TileEntryPagesParams,
    type TileExitPagesParams as TileExitPagesParams,
    type TileMauParams as TileMauParams,
    type TilePagesPerSessionParams as TilePagesPerSessionParams,
    type TileReturnRateParams as TileReturnRateParams,
    type TileSessionDurationParams as TileSessionDurationParams,
    type TileTimeBetweenVisitsParams as TileTimeBetweenVisitsParams,
    type TileTrafficByCountryParams as TileTrafficByCountryParams,
    type TileTrafficByRefererParams as TileTrafficByRefererParams,
    type TileTrafficByUtmParams as TileTrafficByUtmParams,
    type TileUniqueSessionsParams as TileUniqueSessionsParams,
    type TileUniqueVisitorsParams as TileUniqueVisitorsParams,
    type TileVisitorsByBrowserParams as TileVisitorsByBrowserParams,
    type TileVisitorsByOsParams as TileVisitorsByOsParams,
    type TileWauParams as TileWauParams,
  };

  export {
    Retention as Retention,
    type RetentionChurnRateParams as RetentionChurnRateParams,
    type RetentionCohortsParams as RetentionCohortsParams,
  };
}
