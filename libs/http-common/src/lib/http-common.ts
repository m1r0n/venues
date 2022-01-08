import {HttpHeaders, HttpParams} from "@angular/common/http";

export class HttpCommon {
  public static buildParams(query: any): HttpParams {
    let params = new HttpParams();
    Object.keys(query).forEach(k => {
      const param = query[k];
      if (Array.isArray(param)) {
        param.forEach(p => (params = params.append(k, p)));
      } else if (param !== undefined && param !== null) {
        params = params.append(k, param);
      }
    });
    return params;
  }

  public static get headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
  }
}
