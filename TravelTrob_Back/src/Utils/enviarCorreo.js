// Importa la biblioteca nodemailer
import { createTransport } from 'nodemailer'

// Configura el transporter
const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'incmonster365@gmail.com',
        pass: 'bywg txzd qbdg mmrk',
    },
})

// Define las opciones del correo
const opciones = (data)=>{
  const mailOptions = {
    from: 'incmonster365@gmail.com',
    to: data.correoEnviar,
    subject: 'Asunto del correo',
    text: 'Hola usuario les damos las gracias por optar por nuestro servicio, la reservación se realizó exitosamente: ',
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reservacion</title>
  <style>
  .header-triangle {
    padding-top: 1em;
    background-color: #ff5733;
    width: 0;
    height: 0;
    border-left: 10em solid transparent;
    border-right: 10em solid transparent;
    border-bottom: 25px solid white;
  }

  .footer-triangle {
    width: 0;
    height: 0;
    border-left: 10em solid transparent;
    border-right: 10em solid transparent;
    border-bottom: 25px solid #ff5733;
  }

  .card {
    margin: 3%;
    width: 20em;
    background-color: white;
    height: auto;
    text-align: center;
    transition: .5s;
  }

  .card-container {
    text-align: left;
    width: 100%;
    margin-top: 1em;
  }

  .card-container td {
    padding: 0.5em 1em;
  }
</style>
</head>
<body>
  <h>Hola usuario les damos las gracias por optar por nuestro servicio, la reservación se realizó exitosamente: </h>
  <div style="display: flex; justify-content: center;">
    <div class="card">
      <div class="header-triangle"></div>
        <br>
            <span style="font-size: 30px;"><strong>RESERVACIÓN</strong></span>
        <br>
            <span>¡ La reservación se ha Completado !</span>
        <hr style="width: 17em; border: 3px solid #ff5733;">
        <div class="card-container">
          <table>
            <tr>
              <td><strong>Fecha Inicio:</strong></td>
              <td>${data.fechaInicio}</td>
            </tr>
            <tr>
              <td><strong>Fecha Cierre:</strong></td>
              <td>${data.fechaCierre}</td>
            </tr>
            <tr>
              <td><strong>Hotel:</strong></td>
              <td>${data.hotel}</td>
            </tr>
            <tr>
              <td><strong>Personas:</strong></td>
              <td>${data.cantidadPersonas}</td>
            </tr>
            <tr>
              <td><strong>Habitación:</strong></td>
              <td>${data.habitacion}</td>
            </tr>
            <tr>
              <td><strong>Extras:</strong></td>
              <td>${data.dataExtra}</td>
            </tr>
          </table>
        </div>
        <br>
      <div class="footer-triangle"></div>
    </div>
  </div>
</body>
</html>`
  }
  return mailOptions
}

// Envía el correo
export const enviarCorreo = (data)=>{
  transporter.sendMail(opciones(data), function (error, info) {
    if (error) {
        console.log('Hubo un error')
        console.log(error)
    } else {
        console.log('Correo enviado: ' + info.response)
    }
  })
}
