// Required modules and files
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '../config/config.json'))[env];
const db = {};

// Sequelize variable
let sequelize;

// Use environment instructions in config, if available
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// File handling instructions
fs.readdirSync(__dirname)
  .filter(
    (file) => file.includes('.') && file !== basename && file.endsWith('.js')
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

// Database associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Sequelize assignments
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
