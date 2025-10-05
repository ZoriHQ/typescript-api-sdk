// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Zoriapi } from '../client';

export abstract class APIResource {
  protected _client: Zoriapi;

  constructor(client: Zoriapi) {
    this._client = client;
  }
}
