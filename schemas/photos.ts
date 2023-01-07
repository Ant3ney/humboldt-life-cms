/* Photos Schema */

export default {
  title: 'Photos',
  name: 'photos',
  type: 'document',
  fields: [
    {
      title: 'Photos',
      name: 'photos',
      type: 'array',
      of: [
        {
          title: 'Photo Data',
          name: 'photoData',
          type: 'image',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Photos`,
      }
    },
  },
}
