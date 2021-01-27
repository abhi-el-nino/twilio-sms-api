const express = require('express');

const router = express.Router();

router.post('/send-sms', (req, res) => {
    const { to, body } = req.body;
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    client.messages
        .create({
            body,
            from: '+16012588785',
            to
        })
        .then(message => {
            return res.json({
                body: message.sid
            })
        }).catch(err => {
            return res.json({
                body: err
            })
        })

});

module.exports = router;

