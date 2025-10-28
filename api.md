# V1

## Analytics

Types:

- <code><a href="./src/resources/v1/analytics/analytics.ts">ActiveUsersResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">BounceRateByPageMetric</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">BounceRateResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">ChurnRateResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">CohortAnalysisResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">CohortData</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">CountryDataPoint</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">DashboardMetricsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">EventFilterOptionsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">EventsOverTimeDataPoint</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">ManualIdentifyRequest</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">ManualIdentifyResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">OriginDataPoint</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">RecentEvent</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">RecentEventsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">ReturnRateResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">SessionMetricsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">TopVisitor</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">TopVisitorsResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">UniqueVisitorsDataPoint</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">UniqueVisitorsTimelineResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorDataPoint</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorEvent</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorProfileResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorsByCountryResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorsByDeviceResponse</a></code>
- <code><a href="./src/resources/v1/analytics/analytics.ts">VisitorsByOriginResponse</a></code>

Methods:

- <code title="get /api/v1/analytics/dashboard">client.v1.analytics.<a href="./src/resources/v1/analytics/analytics.ts">dashboard</a>({ ...params }) -> DashboardMetricsResponse</code>

### Visitors

Methods:

- <code title="get /api/v1/analytics/visitors/country">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">byCountry</a>({ ...params }) -> VisitorsByCountryResponse</code>
- <code title="get /api/v1/analytics/visitors/device">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">byDevice</a>({ ...params }) -> VisitorsByDeviceResponse</code>
- <code title="get /api/v1/analytics/visitors/origin">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">byOrigin</a>({ ...params }) -> VisitorsByOriginResponse</code>
- <code title="post /api/v1/analytics/visitors/identify">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">identify</a>({ ...params }) -> ManualIdentifyResponse</code>
- <code title="get /api/v1/analytics/visitors/profile">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">profile</a>({ ...params }) -> VisitorProfileResponse</code>
- <code title="get /api/v1/analytics/visitors/timeline">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">timeline</a>({ ...params }) -> UniqueVisitorsTimelineResponse</code>
- <code title="get /api/v1/analytics/visitors/top">client.v1.analytics.visitors.<a href="./src/resources/v1/analytics/visitors.ts">top</a>({ ...params }) -> TopVisitorsResponse</code>

### Events

Methods:

- <code title="get /api/v1/analytics/events/filter-options">client.v1.analytics.events.<a href="./src/resources/v1/analytics/events.ts">filterOptions</a>({ ...params }) -> EventFilterOptionsResponse</code>
- <code title="get /api/v1/analytics/events/recent">client.v1.analytics.events.<a href="./src/resources/v1/analytics/events.ts">recent</a>({ ...params }) -> RecentEventsResponse</code>

### Sessions

Methods:

- <code title="get /api/v1/analytics/sessions/bounce-rate">client.v1.analytics.sessions.<a href="./src/resources/v1/analytics/sessions.ts">bounceRate</a>({ ...params }) -> BounceRateResponse</code>
- <code title="get /api/v1/analytics/sessions/metrics">client.v1.analytics.sessions.<a href="./src/resources/v1/analytics/sessions.ts">metrics</a>({ ...params }) -> SessionMetricsResponse</code>

### Users

Methods:

- <code title="get /api/v1/analytics/users/active">client.v1.analytics.users.<a href="./src/resources/v1/analytics/users.ts">active</a>({ ...params }) -> ActiveUsersResponse</code>

### Retention

Methods:

- <code title="get /api/v1/analytics/retention/churn-rate">client.v1.analytics.retention.<a href="./src/resources/v1/analytics/retention.ts">churnRate</a>({ ...params }) -> ChurnRateResponse</code>
- <code title="get /api/v1/analytics/retention/cohorts">client.v1.analytics.retention.<a href="./src/resources/v1/analytics/retention.ts">cohorts</a>({ ...params }) -> CohortAnalysisResponse</code>
- <code title="get /api/v1/analytics/retention/return-rate">client.v1.analytics.retention.<a href="./src/resources/v1/analytics/retention.ts">returnRate</a>({ ...params }) -> ReturnRateResponse</code>

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

- <code><a href="./src/resources/v1/payment-providers.ts">CreatePaymentProviderRequest</a></code>
- <code><a href="./src/resources/v1/payment-providers.ts">ListPaymentProvidersResponse</a></code>
- <code><a href="./src/resources/v1/payment-providers.ts">PaymentProviderResponse</a></code>
- <code><a href="./src/resources/v1/payment-providers.ts">UpdatePaymentProviderRequest</a></code>
- <code><a href="./src/resources/v1/payment-providers.ts">PaymentProviderDeleteResponse</a></code>

Methods:

- <code title="post /api/v1/payment-providers">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers.ts">create</a>({ ...params }) -> PaymentProviderResponse</code>
- <code title="put /api/v1/payment-providers/{id}">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers.ts">update</a>(id, { ...params }) -> PaymentProviderResponse</code>
- <code title="get /api/v1/payment-providers">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers.ts">list</a>({ ...params }) -> ListPaymentProvidersResponse</code>
- <code title="delete /api/v1/payment-providers/{id}">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers.ts">delete</a>(id) -> PaymentProviderDeleteResponse</code>
- <code title="get /api/v1/payment-providers/{id}">client.v1.paymentProviders.<a href="./src/resources/v1/payment-providers.ts">get</a>(id) -> PaymentProviderResponse</code>
