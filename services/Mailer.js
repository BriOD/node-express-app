const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    // who this email is from
    this.from_email = new helper.Email('no-reply@teambax.com');
    // subject of email
    this.subject = subject;
    // body of email
    this.body = new helper.Content('text/html', content);
    // recipients of this emial, should just be cliff
    // TODO: change this to bax email when it is ready;
    this.recipients = new helper.Email('BrianODev@gmail.com');

    this.addContent(this.body);
    this.addRecipients();
  }

  addRecipients() {
    // not sure if this implementation will work. lecture 132
    const personailize = new helper.Personalization();

    personailize.addTo(this.recipients);
    this.addPersonalization(personailize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
