/**
 * Returns a random number between start and stop
 * @param {Number} start Optional. An integer number specifying at which position to start. Default is `0`
 * @param {Number} stop Optional. An integer number specifying at which position to stop. Default is `10`

 * @returns Random number between `start` and `stop`
 */
function randomNumber(start = 0, stop = 10) {
  if (isNaN(start)) throw new Error(`name \'${start}\' is not defined.`)
  if (isNaN(stop)) throw new Error(`name \'${stop}\' is not defined.`)
  return Math.floor(Math.random() * (stop - start + 1) + start)
}

/**
 * Returns a random char 
 * @returns 
 */
function randomChar() {
  const chars = 'abcdefghijklmnopqrstuvwxyz'.split("");
  return chars[Math.floor(Math.random() * chars.length)]
}



module.exports = {
  randomNumber,
  randomChar
}