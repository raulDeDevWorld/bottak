// pages/api/fetchData.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // URL del Google Apps Script (reemplaza con tu propia URL)
    const url = 'https://script.google.com/macros/s/AKfycbyhr9Wm8PBuppulNFk0C4Ke1y8JG1Bxc9wZDmdY4MCMMW6FaHmDdpOHTR5txh72fc5hCQ/exec';
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
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
