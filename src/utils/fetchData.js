export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "404441f6fcmshb26e77e630ab6ccp193e2ajsnfd2cc600143d",
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
