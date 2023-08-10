import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import schemas from './sanity/schemas';


export default defineConfig({
  name: 'default',
  title: 'Adecodes',

  projectId: '1vabhok1',
  apiVersion: '2023-09-08',
  dataset: 'production',
  basePath: '/admin',

  plugins: [
    deskTool(),
     visionTool(),
     dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'My Netlify deploys',
            sites: [
              {
                title: 'Sanity Studio',
                apiId: '6f428350-899c-43d7-a2e7-657fc4bf3b7c',
                buildHookId: 'admin',
                name: 'Adecodes',
                url: 'https://adecodes.com',
              },
            ]
        })
      ]
    })
    ],
  schema: { types: schemas}


})

