const { randomNumber, randomChar } = require('./random')

function uuid(uuid_length = 32, type = { timestamp: false, namespace: false, random: false }) {
  const { timestamp, namespace, random } = type;
  let uid = "";
  let count = ""
  const datetime = (new Date().getTime()).toString().split("");

  if (timestamp) {
    for (let i = 0; i < datetime.length; i++) {
      uid += `${datetime[i]}${randomNumber()}`
    }
  } else if (namespace) {
    for (let i = 0; i < datetime.length; i++) {
      uid += `${datetime[i]}${randomChar()}`
    }
  }

  // if (!count) throw new Error('No uuid type specificed')
  if (uuid_length > 32) throw new Error('max lenght for uuid id 32');
  // else if (uuid_length === 26) return uid;
  else {
    for (let l = 0; l < uuid_length; l++) {
      let uidArray = uid.split("");
      count += uidArray[l]
    }
  }

  return count;
}


console.log(uuid(16, { namespace: true }))
module.exports = uuid