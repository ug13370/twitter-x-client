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
  };

  const response = await fetch(url, fetchObj);
  if (response.status === 500) {
    throw new Error("API failed to load respone.");
  }

  const data = await response.json();
  return data as T;
}

export default apiCall;
