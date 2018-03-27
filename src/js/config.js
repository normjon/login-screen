var loginOptions = {};

loginOptions['PROD']={
  "cookieOptions": {
    //"domain":".pearson.com",
    "domain":".pearsoncms.net",
    "path":"/",
    "maxAge":86400,
    "secure":true
  },
  //"authEndpoint":"https://identity-internal.pearson.com/auth",
  "authEndpoint":"/auth",
  "resetPasswordLink":"https://pearson.service-now.com/pearson_password_reset_page.do"
}

loginOptions['TEST']={
  "cookieOptions": {
    "domain":".pearsoncms.net",
    "path":"/",
    "maxAge":86400,
    "secure":true
  },
  "authEndpoint":"/auth",
  "resetPasswordLink":"https://pearson.service-now.com/pearson_password_reset_page.do"
}

export {loginOptions};
