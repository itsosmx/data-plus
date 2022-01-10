const router = require('express').Router();
const { first_name, last_name, email, phone, job_title, ip_address, city } = require("../json")


router.get("/first_name", (req, res) => {
  let { size } = req.query;
  res.json(sorting(first_name, size))
})
router.get("/last_name", (req, res) => {
  let { size } = req.query;
  res.json(sorting(last_name, size))
})
router.get("/email", (req, res) => {
  let { size } = req.query;
  res.json(sorting(email, size))
})
router.get("/phone", (req, res) => {
  let { size } = req.query;
  res.json(sorting(phone, size))
})
router.get("/job_title", (req, res) => {
  let { size } = req.query;
  res.json(sorting(job_title, size))
})
router.get("/ip_address", (req, res) => {
  let { size } = req.query;
  res.json(sorting(ip_address, size))
})
router.get("/city", (req, res) => {
  let { size } = req.query;
  res.json(sorting(city, size))
})
router.put('/combine', (req, res) => {
  const { first_name: f,
    last_name: l,
    email: e,
    phone: p,
    job_title: j,
    ip_address: i,
    city: c } = req.body
  const { size = 50 } = req.params;
  const data = []
  var obj = {}
  for (let x = 0; x < size; x++) {
    f ? obj["first_name"] = randomValue(first_name) : null;
    l ? obj["last_name"] = randomValue(last_name) : null;
    e ? obj["email"] = randomValue(email) : null;
    p ? obj["phone"] = randomValue(phone) : null;
    j ? obj["job_title"] = randomValue(job_title) : null;
    i ? obj["ip_address"] = randomValue(ip_address) : null;
    c ? obj["city"] = randomValue(city) : null;
    data.push(obj)
    obj = {}
  }
  res.json(data)
})



function randomValue(array) {
  const shuffled = sorting(array, 3000);
  const obj = shuffled.data[Math.floor(Math.random() * 3000)];
  return obj[Object.keys(obj)[0]]
}

function sorting(array, size = 100) {
  if (size > 3000) size = 3000;
  const shuffle = array.sort(() => 0.5 - Math.random());
  const data = shuffle.slice(0, size);
  return {
    length: data.length,
    data: [...data]
  }
}


module.exports = router;
