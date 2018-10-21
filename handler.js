'use strict';
const AWS = require('aws-sdk');
const SES = new AWS.SES();
require ('dotenv').load();

function sendEmail(formData, callback) {
  const emailParams = {
    Source: process.env.SENDING_EMAIL, // SES SENDING EMAIL
    ReplyToAddresses: [formData.reply_to],
    Destination: {
      ToAddresses: [process.env.RECEIVING_EMAIL], // SES RECEIVING EMAIL
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.reply_to}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New message from mary-makes.com',
      },
    },
  }
  SES.sendEmail(emailParams, callback);
};

module.exports.hello = (event, context, callback) => {
  const formData = JSON.parse(event.body);

  sendEmail(formData, function (err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };

    callback(null, response);
  });
};