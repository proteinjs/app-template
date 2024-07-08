import { DefaultEmailConfigFactory, EmailConfig } from '@proteinjs/user-server';

export class EmailConfigFactory implements DefaultEmailConfigFactory {
  getEmailConfig(): EmailConfig {
    return {
      host: process.env.EMAIL_HOST || 'smtp.example.com',
      port: parseInt(process.env.EMAIL_PORT || '587', 10),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@example.com',
        pass: process.env.EMAIL_PASS || 'your-email-password',
      },
      from: process.env.EMAIL_FROM || 'noreply@yourdomain.com',
    };
  }
}
