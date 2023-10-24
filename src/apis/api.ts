async function apiCall<T>(
  url: string,
  method: string,
  headers: any,
  body?: any
): Promise<T> {
  const fetchObj: any = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    withCredentials: true,
    credentials: "include",
  };

  const response = await fetch(url, fetchObj);
  if (response.status === 401)
    window.location.href = `${process.env.REACT_APP_URL}/Auth`;
  else if (response.status === 500)
    throw new Error("API failed to load respone.");

  const data = await response.json();
  return data as T;
}

export default apiCall;
