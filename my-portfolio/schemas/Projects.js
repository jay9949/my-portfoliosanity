export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'projectsItem',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'role',
              title: 'Role',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'demo',
              title: 'Demo',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Text',
                  type: 'string',
                },
                {
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                },
              ],
            },
            {
              name: 'source',
              title: 'Source',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Text',
                  type: 'string',
                },
                {
                  name: 'link',
                  title: 'Link',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
