const POST_SPC= async (body) => {
    const URL_SPC = "https://contratae.onrender.com/";
  
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    };

    return fetch(URL_SPC, options);
  } catch (e) {
    return e;
  }
};

export default POST_SPC
