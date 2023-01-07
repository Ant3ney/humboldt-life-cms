/* Settings Schema */

export default {
  title: 'Settings',
  name: 'settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Site Name',
      name: 'siteName',
      type: 'string',
    },
    {
      title: 'Landing Title',
      name: 'landingTitle',
      type: 'string',
    },
    {
      title: 'Landing Subtitle',
      name: 'landingSubtitle',
      type: 'string',
    },
    {
      title: 'Landing Background',
      name: 'landingBackground',
      type: 'image',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Settings`,
      }
    },
  },
}
