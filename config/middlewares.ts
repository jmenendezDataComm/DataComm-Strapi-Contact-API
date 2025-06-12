export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        cors: { enabled: true, headers: '*' },
        useDefaults: true,
        directives: {
          'script-src': ['https://cdn.ckeditor.com'],
          'connect-src': ['https://proxy-event.ckeditor.com'],
          "frame-src":[
                        "'self'",
                        "youtube.com",
                        "www.youtube.com",
                        "vimeo.com",
                        "*.vimeo.com",
                        "facebook.com",
                        "www.facebook.com",
                    ]
        },
      },
    },
  }
];
