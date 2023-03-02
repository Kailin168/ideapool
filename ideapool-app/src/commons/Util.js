// const useFakeData = true;

const URL = 'http://localhost:4000';

export const getPostsData = async () => {
  const url = 'http://localhost:4000/posts'
  // const url = useFakeData ? 'http://localhost:4000/posts' : `https://finnhub.io/api/v1/search?q=${stockTicker}&token=${API_KEY}`;
  try {
    // the try catch is to catch any errors that might occur during the fetch
    const response = await fetch(url);
    // wait for the fetch response to return as a response object from this access the id after the : in the path
    const data = await response.json();
    // wait for the response object to return and parse it to json object
    return data;
  }
  catch (error) {
    console.log(error);
    // if there is an error, log it to the console
  }
};

export const makeRequest = async (route, method, headers = {}, body) => {
  const newRoute = route && route.length > 0 && route[0] === '/' ? route : `/${route}`;
  const url = `${URL}${newRoute}`;
  // const url = useFakeData ? 'http://localhost:4000/posts' : `https://finnhub.io/api/v1/search?q=${stockTicker}&token=${API_KEY}`;

  const requestBody = body ? JSON.stringify(body) : undefined;
  const requestHeaders = headers;
  requestHeaders['Content-Type'] = headers['Content-Type'] || 'application/json';
  requestHeaders['ngrok-skip-browser-warning'] = 'true';

  try {
    // the try catch is to catch any errors that might occur during the fetch
    const response = await fetch(url,  {
      method: method || 'GET',
      headers:requestHeaders,
      body: requestBody,
    });
    if (response.status >= 200 && response.status <= 299) { // 2xx
      const data = await response.json();
      // wait for the response object to return and parse it to json object
      return data;
    } else { // 4xx, 5xx 
      throw new Error(response.statusText);
    }
    // wait for the fetch response to return as a response object from this access the id after the : in the path
  }
  catch (error) {
    throw error;
    // if there is an error, log it to the console
  }
};