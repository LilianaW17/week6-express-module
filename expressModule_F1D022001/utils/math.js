const tambah = (a, b) => {
  return a + b;
};

const kurang = (a, b) => {
  return a - b;
};

const kali = (a, b) => {
  return a * b;
};

const bagi = (a, b) => {
  if (b === 0) {
    return "Tidak bisa membagi dengan nol";
  }
  return a / b;
};

const modulus = (a, b) => {
  return a % b;
};

module.exports = {
  tambah,
  kali,
  kurang,
  bagi,
  modulus
};