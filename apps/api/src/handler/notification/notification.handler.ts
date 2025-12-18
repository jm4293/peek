import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as firebaseAdmin from 'firebase-admin';

import { UserNotification } from '@packages/database/entities';
import { UserNotificationRepository } from '@packages/database/repositories';

import { UserNotificationTypeValue } from '@packages/shared/constant';

@Injectable()
export class NotificationHandler {
  constructor(
    @InjectRepository(UserNotification)
    private readonly userNotificationRepository: UserNotificationRepository,
  ) {}

  async sendPushNotification(params: {
    pushToken: string | null;
    message: string;
    userNotificationType: UserNotificationTypeValue;
    accountId: number;
  }) {
    const { pushToken, message, userNotificationType, accountId } = params;

    try {
      await firebaseAdmin.messaging().send({ token: pushToken, notification: { title: 'PEEK 알림', body: message } });

      const userNotification = this.userNotificationRepository.create({
        userNotificationType,
        message,
        userAccountId: accountId,
      });

      await this.userNotificationRepository.save(userNotification);
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  }
}
