import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserAccount } from './user-account.entity';

import { UserNotificationType, UserNotificationTypeValue } from '@packages/shared/constant';

@Entity()
export class UserNotification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 36 })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'tinyint', enum: UserNotificationType })
  userNotificationType: UserNotificationTypeValue;

  @Column({ type: 'varchar', length: 255 })
  message: string;

  @Column({ type: 'boolean', default: false })
  isRead: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Exclude()
  @Column()
  userAccountId: number;

  @ManyToOne(() => UserAccount, (userAccount) => userAccount.userNotifications, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userAccountId' })
  userAccount: UserAccount;
}
