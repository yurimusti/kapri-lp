import axios from "axios";

export const uploadPhotoCall = (params) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        // 'Content-Type': undefined,
        // 'Content-Length': 228,
      },
    };

    const fb = new FormData();
    fb.append("file", params.file);
    fb.append("nome", params.nome);

    return axios
      .post(`https://api-upload-idrinks.herokuapp.com/uploadPhoto`, fb)
      .then((e) => resolve(e.data))
      .catch((err) => reject(err));
  });
};
