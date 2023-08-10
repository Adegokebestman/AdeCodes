import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
// import { dashboardTool } from "@sanity/dashboard";
// import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import schemas from './sanity/schemas';


export default defineConfig({
  name: 'default',
  title: 'Adecodes',

  projectId: '1vabhok1',
  apiVersion: '2023-08-10',
  dataset: 'production',
  basePath: '/admin',

  plugins: [
    deskTool(),
     visionTool(),
    ],
  schema: { types: schemas}


})

