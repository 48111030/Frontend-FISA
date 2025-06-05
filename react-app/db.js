import "dotenv/config";

export const config = {
    url: "postgresql://formdatos_owner:npg_qCeyh3odx9aG@ep-flat-fog-a86vesqg-pooler.eastus2.azure.neon.tech/formdatos?sslmode=require",
    user: "David", // Tu usuario de base de datos
    host: "ep-flat-fog-a86vesqg-pooler.eastus2.azure.neon.tech", // El host de la base de datos
    database: "formdatos", // El nombre de tu base de datos
    password: "npg_qCeyh3odx9aG", // La contraseña de tu base de datos
    port: 5432, // ✅ puerto correcto para PostgreSQL, // El puerto de PostgreSQL (por defecto es 5432)
    ssl: true, // SSL habilitado para conexiones seguras
};


import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    config.url
);

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}