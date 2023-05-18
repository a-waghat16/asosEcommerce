export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0dac6a77b1msh0518125ea20e6f7p1ec279jsn864a0843cd3a",
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
