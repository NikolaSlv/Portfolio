import {defineType} from 'sanity'

export const social = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Platform for social media",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ], 
})
