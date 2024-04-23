export function getQueryParam(id){
  const queryString = document.location.search;
  const parameters = new URLSearchParams(queryString);
  const parameter = parameters.get(id);

  return parameter;
}