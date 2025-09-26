const express = require('express');
const router = express.Router();

const profiles = [
  { id: 1, nim: "F1D022001", nama: "Wulandari Ajeng", prodi: "Teknik Informatika" },
  { id: 2, nim: "W1S021999", nama: "Ahmad Naruto", prodi: "Teknik Seribu Bayangan" },
  { id: 3, nim: "G1A025021", nama: "Son Goku", prodi: "Penerbangan" },
];

router.get('/', (req, res) => {
  res.json(profiles);
});

router.get('/:nim', (req, res) => {
  const nimCari = req.params.nim;
  const profile = profiles.find(p => p.nim === nimCari);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: 'Profil dengan NIM tersebut tidak ditemukan.' });
  }
});

module.exports = router;