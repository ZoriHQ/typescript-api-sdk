// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AppAPI from './app';
import { App, AppHandleCallbackParams, AppHandleCallbackResponse } from './app';

export class Stripe extends APIResource {
  app: AppAPI.App = new AppAPI.App(this._client);
}

Stripe.App = App;

export declare namespace Stripe {
  export {
    App as App,
    type AppHandleCallbackResponse as AppHandleCallbackResponse,
    type AppHandleCallbackParams as AppHandleCallbackParams,
  };
}
