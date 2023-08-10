import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
// import { dashboardTool } from "@sanity/dashboard";
// import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import schemas from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export default defineConfig({
  name: 'default',
  title: 'Adecodes',

  projectId,
  apiVersion,
  dataset,
  basePath: '/admin',

  plugins: [
    deskTool(),
     visionTool(),
    ],
  schema: { types: schemas}


})

