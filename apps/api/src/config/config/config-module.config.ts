import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';

export const configModuleConfig: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: ['.env', 'apps/api/.env'],
  cache: true,
  validationOptions: {
    abortEarly: true, // 가장 처음 발견된 에러에서 멈춤
    allowUnknown: true, // 스키마에 명시되지 않은 필드 허용 (npm 환경 변수 등)
  },
  validationSchema: Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),

    SERVER_PORT: Joi.number().required(),
    SERVER_PORT_ADMIN: Joi.number().required(),

    JWT_SECRET_KEY: Joi.string().required(),

    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASE: Joi.string().required(),

    GMAIL_USER: Joi.string().required(),
    GMAIL_APP_KEY: Joi.string().required(),

    AWS_REGION: Joi.string().required(),
    AWS_ACCESS_KEY_ID: Joi.string().required(),
    AWS_SECRET_ACCESS_KEY: Joi.string().required(),

    KAKAO_APP_KEY: Joi.string().required(),
    KAKAO_CLIENT_SECRET: Joi.string().required(),
    KAKAO_REDIRECT_URI: Joi.string().required(),

    NAVER_CLIENT_ID: Joi.string().required(),
    NAVER_CLIENT_SECRET: Joi.string().required(),
    NAVER_REDIRECT_URL: Joi.string().required(),

    KIS_APP_KEY: Joi.string().required(),
    KIS_APP_SECRET: Joi.string().required(),

    LS_APP_KEY: Joi.string().required(),
    LS_APP_SECRET: Joi.string().required(),

    KIWOOM_APP_KEY: Joi.string().required(),
    KIWOOM_APP_SECRET: Joi.string().required(),

    OPEN_API_KOREA_EXIM: Joi.string().required(),

    FIREBASE_PROJECT_ID: Joi.string().required(),
    FIREBASE_PRIVATE_KEY_ID: Joi.string().required(),
    FIREBASE_PRIVATE_KEY: Joi.string().required(),
    FIREBASE_CLIENT_EMAIL: Joi.string().required(),
    FIREBASE_CLIENT_ID: Joi.string().required(),
    FIREBASE_AUTH_URI: Joi.string().required(),
    FIREBASE_TOKEN_URI: Joi.string().required(),
    FIREBASE_AUTH_PROVIDER_X509_CERT_URL: Joi.string().required(),
    FIREBASE_CLIENT_X509_CERT_URL: Joi.string().required(),
  }),
};
