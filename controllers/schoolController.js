const db = require('../db');

// Validate input data
function validateSchool(data) {
  const { name, address, latitude, longitude } = data;
  return name && address && !isNaN(latitude) && !isNaN(longitude);
}

// Add School API
exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!validateSchool(req.body)) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  try {
    await db.execute(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );
    res.status(201).json({ message: 'School added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};

// List Schools API
exports.listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: 'Invalid coordinates' });
  }

  try {
    const [schools] = await db.query('SELECT * FROM schools');

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const withDistance = schools.map(school => {
      const distance = Math.sqrt(
        Math.pow(school.latitude - userLat, 2) +
        Math.pow(school.longitude - userLon, 2)
      );
      return { ...school, distance };
    });

    withDistance.sort((a, b) => a.distance - b.distance);

    res.json(withDistance);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve schools', details: err.message });
  }
};
