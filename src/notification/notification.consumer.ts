import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';
import { NotificationDto } from './notification.dto';
import { MailService } from 'src/mail/service/mail.service';

@Injectable()
@Processor('notification_queue')
export class NotificationConsumer {
  constructor(private readonly mailService: MailService) {}

  @Process()
  async processNotification(job: Job<NotificationDto>) {
    console.log(job);
    const notification = job.data;
    if (!notification) {
      console.error('Notification is undefined');
      return;
    }
    await this.mailService.sendMail(notification);
    return notification;
  }
}
