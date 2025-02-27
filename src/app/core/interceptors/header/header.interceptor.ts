import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone( {
    setHeaders:{ token: `3b8ny__${localStorage.getItem("token") || ''}`}
  } )
  return next(req);
};
