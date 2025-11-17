# V1

## Auth

Types:

- <code><a href="./src/resources/v1/auth.ts">LoginRequest</a></code>
- <code><a href="./src/resources/v1/auth.ts">LoginResponse</a></code>

Methods:

- <code title="post /api/v1/auth/login">client.v1.auth.<a href="./src/resources/v1/auth.ts">login</a>({ ...params }) -> LoginResponse</code>

## Analytics

Types:

- <code><a href="./src/resources/v1/analytics/analytics.ts">BounceRateResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">CardPrecision</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">ChurnRateResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">CohortAnalysisResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">CohortData</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">CountryTrafficSourceData</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">CountryTrafficSourceResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">DauResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">EntryPagesData</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">EntryPagesResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">EventFilterOptionsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">EventsOverTimeDataPoint</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">ExitPagesData</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">ExitPagesResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">ManualIdentifyRequest</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">ManualIdentifyResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">MauResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">PagesPerSessionResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">RecentEvent</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">RecentEventsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">RefererTrafficSourceData</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">RefererTrafficSourceResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">ReturnRateResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">SessionDurationResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">TimeBetweenVisitsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">TimelineTileData</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">TimelineTileResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">TopVisitor</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">TopVisitorsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">UniqueSessionsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">UniqueVisitorsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">UtmTrafficSourceResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorDataPoint</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorEvent</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorProfileResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorsByBrowserResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorsByDeviceResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorsByOsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">WauResponse</a></code>

Methods:

- <code title="get /api/v1/analytics/timeline">client.v1.analytics.<a href="./src/resources/v1/analytics/analytics.ts">timeline</a>({ ...params }) -> TimelineTileResponse</code>

### Visitors

Methods:

- <code title="get /api/v1/analytics/visitors/device">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">byDevice</a>({ ...params }) -> VisitorsByDeviceResponse</code>
- <code title="post /api/v1/analytics/visitors/identify">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">identify</a>({ ...params }) -> ManualIdentifyResponse</code>
- <code title="get /api/v1/analytics/visitors/profile">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">profile</a>({ ...params }) -> VisitorProfileResponse</code>
- <code title="get /api/v1/analytics/visitors/top">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">top</a>({ ...params }) -> TopVisitorsResponse</code>

### Events

Methods:

- <code title="get /api/v1/analytics/events/filter-options">client.v1.analytics.events.<a href="./src/resources/v1/analytics/events.ts">filterOptions</a>({ ...params }) -> EventFilterOptionsResponse</code>
- <code title="get /api/v1/analytics/events/recent">client.v1.analytics.events.<a href="./src/resources/v1/analytics/events.ts">recent</a>({ ...params }) -> RecentEventsResponse</code>

### Tiles

Methods:

- <code title="get /api/v1/analytics/tiles/bounce-rate">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">bounceRate</a>({ ...params }) -> BounceRateResponse</code>
- <code title="get /api/v1/analytics/tiles/dau">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">dau</a>({ ...params }) -> DauResponse</code>
- <code title="get /api/v1/analytics/tiles/entry-pages">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">entryPages</a>({ ...params }) -> EntryPagesResponse</code>
- <code title="get /api/v1/analytics/tiles/exit-pages">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">exitPages</a>({ ...params }) -> ExitPagesResponse</code>
- <code title="get /api/v1/analytics/tiles/mau">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">mau</a>({ ...params }) -> MauResponse</code>
- <code title="get /api/v1/analytics/tiles/pages-per-session">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">pagesPerSession</a>({ ...params }) -> PagesPerSessionResponse</code>
- <code title="get /api/v1/analytics/tiles/return-rate">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">returnRate</a>({ ...params }) -> ReturnRateResponse</code>
- <code title="get /api/v1/analytics/tiles/session-duration">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">sessionDuration</a>({ ...params }) -> SessionDurationResponse</code>
- <code title="get /api/v1/analytics/tiles/time-between-visits">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">timeBetweenVisits</a>({ ...params }) -> TimeBetweenVisitsResponse</code>
- <code title="get /api/v1/analytics/tiles/traffic-by-country">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">trafficByCountry</a>({ ...params }) -> CountryTrafficSourceResponse</code>
- <code title="get /api/v1/analytics/tiles/traffic-by-referer">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">trafficByReferer</a>({ ...params }) -> RefererTrafficSourceResponse</code>
- <code title="get /api/v1/analytics/tiles/traffic-by-utm">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">trafficByUtm</a>({ ...params }) -> UtmTrafficSourceResponse</code>
- <code title="get /api/v1/analytics/tiles/unique-sessions">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">uniqueSessions</a>({ ...params }) -> UniqueSessionsResponse</code>
- <code title="get /api/v1/analytics/tiles/unique-visitors">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">uniqueVisitors</a>({ ...params }) -> UniqueVisitorsResponse</code>
- <code title="get /api/v1/analytics/tiles/visitors-by-browser">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">visitorsByBrowser</a>({ ...params }) -> VisitorsByBrowserResponse</code>
- <code title="get /api/v1/analytics/tiles/visitors-by-os">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">visitorsByOs</a>({ ...params }) -> VisitorsByOsResponse</code>
- <code title="get /api/v1/analytics/tiles/wau">client.v1.analytics.tiles.<a href="./src/resources/v1/analytics/tiles.ts">wau</a>({ ...params }) -> WauResponse</code>

### Retention

Methods:

- <code title="get /api/v1/analytics/retention/churn-rate">client.v1.analytics.retention.<a href="./src/resources/v1/analytics/retention.ts">churnRate</a>({ ...params }) -> ChurnRateResponse</code>
- <code title="get /api/v1/analytics/retention/cohorts">client.v1.analytics.retention.<a href="./src/resources/v1/analytics/retention.ts">cohorts</a>({ ...params }) -> CohortAnalysisResponse</code>

## Revenue

Types:

- <code><a href="./src/resources/v1/revenue/revenue.ts">AttributionByOriginResponse</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">AttributionByUtmResponse</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">ConversionMetricsResponse</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">CustomerProfileResponse</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">DashboardResponse</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">OriginAttributionDataPoint</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">Payment</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">RevenueOverTimeDataPoint</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">TimelineDataPoint</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">TimelineResponse</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">TopCustomer</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">TopCustomersResponse</a></code>
- <code><a href="./src/resources/v1/revenue/revenue.ts">UtmAttributionDataPoint</a></code>

Methods:

- <code title="get /api/v1/revenue/dashboard">client.v1.revenue.<a href="./src/resources/v1/revenue/revenue.ts">dashboard</a>({ ...params }) -> DashboardResponse</code>
- <code title="get /api/v1/revenue/timeline">client.v1.revenue.<a href="./src/resources/v1/revenue/revenue.ts">timeline</a>({ ...params }) -> TimelineResponse</code>

### Attribution

Methods:

- <code title="get /api/v1/revenue/attribution/origin">client.v1.revenue.attribution.<a href="./src/resources/v1/revenue/attribution.ts">byOrigin</a>({ ...params }) -> AttributionByOriginResponse</code>
- <code title="get /api/v1/revenue/attribution/utm">client.v1.revenue.attribution.<a href="./src/resources/v1/revenue/attribution.ts">byUtm</a>({ ...params }) -> AttributionByUtmResponse</code>

### Customers

Methods:

- <code title="get /api/v1/revenue/customers/profile">client.v1.revenue.customers.<a href="./src/resources/v1/revenue/customers.ts">profile</a>({ ...params }) -> CustomerProfileResponse</code>
- <code title="get /api/v1/revenue/customers/top">client.v1.revenue.customers.<a href="./src/resources/v1/revenue/customers.ts">top</a>({ ...params }) -> TopCustomersResponse</code>

### Conversion

Methods:

- <code title="get /api/v1/revenue/conversion/metrics">client.v1.revenue.conversion.<a href="./src/resources/v1/revenue/conversion.ts">metrics</a>({ ...params }) -> ConversionMetricsResponse</code>

### Cohort

Types:

- <code><a href="./src/resources/v1/revenue/cohort.ts">CohortGetMetricsResponse</a></code>

Methods:

- <code title="post /api/v1/revenue/cohort/metrics">client.v1.revenue.cohort.<a href="./src/resources/v1/revenue/cohort.ts">getMetrics</a>({ ...params }) -> CohortGetMetricsResponse</code>

## Projects

Types:

- <code><a href="./src/resources/v1/projects.ts">CreateProjectRequest</a></code>
- <code><a href="./src/resources/v1/projects.ts">ListProjectsResponse</a></code>
- <code><a href="./src/resources/v1/projects.ts">Project</a></code>
- <code><a href="./src/resources/v1/projects.ts">ProjectResponse</a></code>
- <code><a href="./src/resources/v1/projects.ts">UpdateProjectRequest</a></code>
- <code><a href="./src/resources/v1/projects.ts">ProjectDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/projects">client.v1.projects.<a href="./src/resources/v1/projects.ts">create</a>({ ...params }) -> ProjectResponse</code>
- <code title="put /api/v1/projects/{id}">client.v1.projects.<a href="./src/resources/v1/projects.ts">update</a>(id, { ...params }) -> ProjectResponse</code>
- <code title="get /api/v1/projects/list">client.v1.projects.<a href="./src/resources/v1/projects.ts">list</a>() -> ListProjectsResponse</code>
- <code title="delete /api/v1/projects/{id}">client.v1.projects.<a href="./src/resources/v1/projects.ts">delete</a>(id) -> ProjectDeleteResponse</code>
- <code title="get /api/v1/projects/{id}">client.v1.projects.<a href="./src/resources/v1/projects.ts">get</a>(id) -> ProjectResponse</code>

## PaymentProviders

Types:

- <code><a href="./src/resources/v1/payment-providers/payment-providers.ts">CreatePaymentProviderRequest</a></code>
- <code><a href="./src/resources/v1/payment-providers/payment-providers.ts">ListPaymentProvidersResponse</a></code>
- <code><a href="./src/resources/v1/payment-providers/payment-providers.ts">PaymentProviderResponse</a></code>
- <code><a href="./src/resources/v1/payment-providers/payment-providers.ts">ProviderField</a></code>
- <code><a href="./src/resources/v1/payment-providers/payment-providers.ts">ProviderInstructionsResponse</a></code>
- <code><a href="./src/resources/v1/payment-providers/payment-providers.ts">UpdatePaymentProviderRequest</a></code>
- <code><a href="./src/resources/v1/payment-providers/payment-providers.ts">PaymentProviderDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/payment-providers">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers/payment-providers.ts">create</a>({ ...params }) -> PaymentProviderResponse</code>
- <code title="put /api/v1/payment-providers/{id}">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers/payment-providers.ts">update</a>(id, { ...params }) -> PaymentProviderResponse</code>
- <code title="get /api/v1/payment-providers">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers/payment-providers.ts">list</a>({ ...params }) -> ListPaymentProvidersResponse</code>
- <code title="delete /api/v1/payment-providers/{id}">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers/payment-providers.ts">delete</a>(id) -> PaymentProviderDeleteResponse</code>
- <code title="get /api/v1/payment-providers/{id}">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers/payment-providers.ts">get</a>(id) -> PaymentProviderResponse</code>
- <code title="get /api/v1/payment-providers/instructions">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers/payment-providers.ts">instructions</a>({ ...params }) -> ProviderInstructionsResponse</code>

### Stripe

#### App

Types:

- <code><a href="./src/resources/v1/payment-providers/stripe/app.ts">AppHandleCallbackResponse</a></code>

Methods:

- <code title="get /api/v1/payment-providers/stripe/app/callback">client.v1.paymentProviders.stripe.app.<a href="./src/resources/v1/payment-providers/stripe/app.ts">handleCallback</a>({ ...params }) -> AppHandleCallbackResponse</code>
