// pages/api/fetchData.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  console.log(req.body)
  if (req.method === 'POST') {
    // URL del Google Apps Script (reemplaza con tu propia URL)
    const url = 'https://script.google.com/macros/s/AKfycbxkLH7b0Hat_2vx2AVfOrhJ0sJooEXZ1O3hWeOaYyKzO_O-8nsAtq8Ci1KK8iM8a-NV/exec';
    try {
      // Realiza la solicitud POST
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Tipo de contenido
        },
        body:  JSON.stringify(req.body),
      });

      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Convierte la respuesta a JSON
      const data = await response.json();
      res.status(200).json(data); // Envía la respuesta al cliente

    } catch (error) {
      res.status(500).json({ error: error.message }); // Manejo de errores
    }

  } else {
    // Manejo de métodos no permitidos
    // res.setHeader('Allow', ['POST']);
    res.status(405).json({ error:`Method ${req.method} Not Allowed` }); // Manejo de errores

  }
}
