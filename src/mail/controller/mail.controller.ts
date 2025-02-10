import { Body, Controller, Post } from '@nestjs/common';
import { NotificationDto } from 'src/notification/notification.dto';
import { RabbitMQService } from 'src/rabbitmq/rabbitmq.service';

@Controller()
export class MailController {
  constructor(private readonly rabbitMQService: RabbitMQService) {}

  @Post('send-notification')
  async sendNotification(@Body() notification: NotificationDto) {
    await this.rabbitMQService.sendNotification(notification);
    return 'Notification sent to RabbitMQ';
  }
}
