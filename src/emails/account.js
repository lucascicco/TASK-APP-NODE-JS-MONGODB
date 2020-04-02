const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}.`,
        html: ''
    })
}


const CancelAccount = (email,name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'Why did you cancel?',
        text: `Stay with us, ${name}. we have benefits. Goodbye!`
    })
}


module.exports = {
    sendWelcomeEmail,
    CancelAccount
}


// sgMail.send({
//     to: 'lucasciccomy@gmail.com',
//     from: 'lucasciccomy@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you'
// })

//node emails/account.js