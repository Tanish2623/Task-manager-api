const sgMail = require('@sendgrid/mail')
//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to : email,
        from : 'bverma132@gmail.com',
        subject : 'Thanks for joining in!',
        text : 'Welcome to the app, '+name+'. Let me know how you get along with the app.'
    })
}

const sendCancellationEmail = (email ,name) =>{
    sgMail.send ({
        to :email,
        from : 'bverma132@gmail.com',
        subject : 'Sorry to see you GO',
        text : 'Goodbye, '+name+'. I hope to see you sometimes soon'
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail 
}