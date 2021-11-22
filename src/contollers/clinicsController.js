import axios from "axios";
const url =
  "https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json";

export async function getClinics(req, res) {
  const response = await axios.get(url);
  const clinics = response.data;
  res.status(200).json(clinics);

  // res.render("index", { clinics: clinics });
}

export async function searchClinics(req, res) {
  let params = req.query;

  const response = await axios.get(url);
  const clinics = response.data;

  const filteredData = clinics.filter((clinic) => {
    for (let key in params) {
   
      return clinic["name"] == params[key] || clinic["stateName"] == params[key] || clinic['availability']==params[key];
    }
  });
  res.status(200).json(filteredData);
  // res.render("index", { clinics: filteredData });
}
