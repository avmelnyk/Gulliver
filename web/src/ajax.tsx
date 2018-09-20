export function get (url: string) {
  return fetch(url).then(response => response.json());
}
