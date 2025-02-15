import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { NotificationDto } from 'src/notification/notification.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(notification: NotificationDto) {
    const { email, message } = notification;

    await this.mailerService.sendMail({
      to: `${email}@example.com`,
      subject: 'New Notification',
      text: message,
    });

    console.log(`Mail sent to ${email}`);
  }
}
