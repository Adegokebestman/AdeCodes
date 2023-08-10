import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
// import project from './sanity/schemas/project-schema'
// import {schemaTypes} from './schemas'
import schemas from './sanity/schemas';


export default defineConfig({
  name: 'default',
  title: 'Adecodes',

  projectId: '1vabhok1',
  apiVersion: '2023-09-08',
  dataset: 'production',
  basePath: '/admin',

  plugins: [deskTool(), visionTool()],
  schema: { types: schemas}


})
