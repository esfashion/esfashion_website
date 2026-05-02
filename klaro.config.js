var klaroConfig = {
  version: 1,

  elementID: 'klaro',
  storageMethod: 'cookie',
  cookieName: 'klaro-consent',

  cookieExpiresAfterDays: 1,
  default: false, // NO implicit consent

  privacyPolicy: '/privacy',

  acceptAll: true,
  hideDeclineAll: false,
  mustConsent: false,

  translations: {
    en: {
      consentModal: {
        title: 'Privacy Settings',
        description:
          'We use cookies to provide essential functionality and, with your consent, additional services.',
      },
      purposes: {
        essential: 'Essential',
        analytics: 'Analytics',
      },
    },
  },

  services: [
    {
      name: 'essential',
      title: 'Essential Services',
      purposes: ['essential'],
      required: true,
    },

    {
      name: 'analytics',
      title: 'Analytics',
      purposes: ['analytics'],
      required: false,
    },
  ],
}