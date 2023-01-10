import boom from '@hapi/boom';

export const checkAPIKey = (req, res, next) => {
  const apiKey = req.headers['api'];
  if (apiKey === '123') {
    next();
  } else {
    next(boom.unauthorized());
  }
};

// export const chechAdminRole = (req, res, next) => {
//   const user = req.user;
//   if (user.role === 'admin') {
//     next();
//   } else {
//     next(boom.forbidden('Role without permisions'));
//   }
// };
export const chechRoles = (roles) => {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.forbidden('Role without permisions'));
    }
  };
};
