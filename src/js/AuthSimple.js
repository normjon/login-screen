
import superAgent from 'superagent';
const agent = superAgent.agent();
var clientCallback;
var cookieOptions;
var authEndpoint;

export const setLoginOptions = (options) => {
  cookieOptions={};
  cookieOptions=options.cookieOptions
  authEndpoint = options.authEndpoint;
  console.log(JSON.stringify(options));
};

export const doLogin = (data, callback) => {
  console.log('doLogin');
  clientCallback=callback;

  let headers = {
      'X-OpenAM-Username' : data.username,
      'X-OpenAM-Password' : data.password,
      'Content-Type' : 'application/json'
  },
  endpoint = `${authEndpoint}/json/pearson/authenticate`;


  agent
    .post(endpoint)
    .set(headers)
    .send({})
    .end(postLogin);

};

export const testCORS = (callback) => {
  console.log('test CORS');
  clientCallback=callback;
  let headers = {
      'Content-Type' : 'application/json'
    },
    endpoint = `${authEndpoint}/json/serverinfo/*`;

  superAgent
    .get(endpoint)
    .set(headers)
    .end(callback);

};

export const getCookieInfo = () => {
  superAgent
    .get('https://identity-internal-test.pearson.com/auth/json/serverinfo/*')
    .send({})
    .end(function (res,err){
      console.log(res);
      console.log(err);
    });
}

function postLogin (err, res){
  console.log('postLogin');
  console.log(res);
  if (err){
    console.log(err);
    //clientCallback(err, res);
  }
  const tokenId = res.body.tokenId;
  if(tokenId){
    var cookieString = `PearsonSSOSession=${tokenId}; path=${cookieOptions.path}; Domain=${cookieOptions.domain}; Max-Age=${cookieOptions.maxAge}`;
    if(cookieOptions.secure){
      // Setting secure on cookie only works if you are using https.  Otherwise cookie will not set on http.
      cookieString = cookieString+';Secure';
    }
    document.cookie = cookieString;
    clientCallback(err,res);
  }
  else{
    console.log(res);
    clientCallback ({"message":"failed login"},res);
  }
}



