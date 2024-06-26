import { HttpInterceptorFn } from '@angular/common/http';

export const keyInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const requestWithAuthorization = req.clone({
    headers: req.headers.set(
      'X-RapidAPI-Key',
      '3f26fc796cmsh3b57359236df64bp113c47jsn93fe65321a8f',
    ),
  });
  return next(requestWithAuthorization);
};
