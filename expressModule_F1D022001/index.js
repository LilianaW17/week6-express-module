const express = require("express");
const math = require("./utils/math");
const profileRouter = require("./routes/profil");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Nama: Ajeng Sakinah Wulandari, NIM: F1D022001");
});

app.get("/tambah", (req, res) => {
  const hasilPenjumlahan = math.tambah(37, 84);
  res.send(`Hasil penjumlahan 37 + 84 adalah ${hasilPenjumlahan}`);
});

app.get("/kurang", (req, res) => {
  const hasilPengurangan = math.kurang(12, 59);
  res.send(`Hasil pengurangan 12 - 59 adalah ${hasilPengurangan}`);
});

app.get("/kali", (req, res) => {
  const hasilPerkalian = math.kali(46, 73);
  res.send(`Hasil perkalian 46 * 73 adalah ${hasilPerkalian}`);
});

app.get("/bagi", (req, res) => {
  const hasilPembagian = math.bagi(5, 91);
  res.send(`Hasil pembagian 5 / 91 adalah ${hasilPembagian}`);
});

app.get("/mod", (req, res) => {
  const hasilModulus = math.modulus(28, 64);
  res.send(`Hasil pembagian 28 % 64 adalah ${hasilModulus}`);
});

app.use("/profil", profileRouter);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
