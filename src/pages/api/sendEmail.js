const nodemailer = require('nodemailer');

export default function handler(req, res) {

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "info.bottak@gmail.com",
            pass: "jfqt lhab kpwz lmza",
        },
    });

    async function handlerSendEmail() {
        try {
            await transporter.sendMail({
                from: 'info.bottak@gmail.com',
                to: req.body.email,
                subject: ` Reporte de transaccion: estado: ${req.body.estado}`,
                text: req.body.data,
                // html: '<p></p>',

                // attachments: [
                //     {
                //         filename: `Cotizacion_${req.body.element}.pdf`,
                //         content: req.body.pdfBase64.split("base64,")[1],
                //         encoding: 'base64'
                //     }
                // ]
            });
            return res.json({ msg: 'Send Email SuccessFull' })
        } catch (err) {
            console.log(err)
            return res.json({ msg: `error ${err}` })
        }
    }

    handlerSendEmail()
}