
const numberCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// CommonJS export
module.exports = numberCommas;
module.exports.numberCommas = numberCommas;

// ES Module export
module.exports.default = numberCommas;