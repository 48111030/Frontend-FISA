import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up Neon PostgreSQL connection pool
const pool = new Pool({
    connectionString: "postgresql://formdatos_owner:npg_qCeyh3odx9aG@ep-flat-fog-a86vesqg-pooler.eastus2.azure.neon.tech/formdatos?sslmode=require",
    ssl: {
      rejectUnauthorized: false
    }
  });
  

// Define the insert endpoint
app.post('/api/insert', async (req, res) => {
    const {
        historial_crediticio,
        ingresos_mensuales,
        deudas_mensuales,
        monto_prestamo,
        plazo_meses,
        edad,
        tipo_ingreso,
        anos_trabajando
    } = req.body;

    try {
        const query = `
            INSERT INTO public.formIA
            (historial_crediticio, ingresos_mensuales, deudas_mensuales, monto_prestamo, plazo_meses, edad, tipo_ingreso, anos_trabajando)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
            RETURNING *;
        `;

        const values = [
            historial_crediticio,
            ingresos_mensuales,
            deudas_mensuales,
            monto_prestamo,
            plazo_meses,
            edad,
            tipo_ingreso,
            anos_trabajando
        ];

        const result = await pool.query(query, values);

        res.status(201).json({ message: 'Data inserted', data: result.rows[0] });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Failed to insert data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

