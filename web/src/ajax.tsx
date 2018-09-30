export function get<T>(url: string): Promise<T> {
  return fetch(url).then(response => response.json());
}

export function post<T = undefined>(url: string, data: T): Promise<T> {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

export function patch<T = undefined>(url: string, data: T): Promise<T> {
  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}
