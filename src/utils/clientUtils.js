export const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
};

export const saveData = async (data) => {
  const response = await fetch('/api/data', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify( data ),
  });
  return response.json();
};

export const loadData = async (data) => {
  const response = await fetch('/api/data', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
  return response.json();
};

