import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { RabbitMQService } from './rabbitmq/rabbitmq.service';
import { NotificationConsumer } from './notification/notification.consumer';
import { MailController } from './mail/controller/mail.controller';

@Module({
  imports: [MailModule],
  controllers: [MailController],
  providers: [RabbitMQService, NotificationConsumer],
})
export class AppModule {}
