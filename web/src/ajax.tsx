export function get (url: string) {
  return fetch(url).then(response => response.json());
}

export function post (url: string, data: any) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

export function patch (url: string) {
  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}
