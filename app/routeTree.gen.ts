/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as FormImport } from './routes/form'
import { Route as CounterImport } from './routes/counter'
import { Route as IndexImport } from './routes/index'
import { Route as ReacthooksIndexImport } from './routes/reacthooks/index'
import { Route as ReacthooksUseImport } from './routes/reacthooks/use'
import { Route as ReacthooksTransitionImport } from './routes/reacthooks/transition'
import { Route as ReacthooksSyncexternalstoreImport } from './routes/reacthooks/syncexternalstore'
import { Route as ReacthooksOptimisticImport } from './routes/reacthooks/optimistic'
import { Route as ReacthooksDeferredvalueImport } from './routes/reacthooks/deferredvalue'
import { Route as ReacthooksContextImport } from './routes/reacthooks/context'

// Create/Update Routes

const FormRoute = FormImport.update({
  id: '/form',
  path: '/form',
  getParentRoute: () => rootRoute,
} as any)

const CounterRoute = CounterImport.update({
  id: '/counter',
  path: '/counter',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ReacthooksIndexRoute = ReacthooksIndexImport.update({
  id: '/reacthooks/',
  path: '/reacthooks/',
  getParentRoute: () => rootRoute,
} as any)

const ReacthooksUseRoute = ReacthooksUseImport.update({
  id: '/reacthooks/use',
  path: '/reacthooks/use',
  getParentRoute: () => rootRoute,
} as any)

const ReacthooksTransitionRoute = ReacthooksTransitionImport.update({
  id: '/reacthooks/transition',
  path: '/reacthooks/transition',
  getParentRoute: () => rootRoute,
} as any)

const ReacthooksSyncexternalstoreRoute =
  ReacthooksSyncexternalstoreImport.update({
    id: '/reacthooks/syncexternalstore',
    path: '/reacthooks/syncexternalstore',
    getParentRoute: () => rootRoute,
  } as any)

const ReacthooksOptimisticRoute = ReacthooksOptimisticImport.update({
  id: '/reacthooks/optimistic',
  path: '/reacthooks/optimistic',
  getParentRoute: () => rootRoute,
} as any)

const ReacthooksDeferredvalueRoute = ReacthooksDeferredvalueImport.update({
  id: '/reacthooks/deferredvalue',
  path: '/reacthooks/deferredvalue',
  getParentRoute: () => rootRoute,
} as any)

const ReacthooksContextRoute = ReacthooksContextImport.update({
  id: '/reacthooks/context',
  path: '/reacthooks/context',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/counter': {
      id: '/counter'
      path: '/counter'
      fullPath: '/counter'
      preLoaderRoute: typeof CounterImport
      parentRoute: typeof rootRoute
    }
    '/form': {
      id: '/form'
      path: '/form'
      fullPath: '/form'
      preLoaderRoute: typeof FormImport
      parentRoute: typeof rootRoute
    }
    '/reacthooks/context': {
      id: '/reacthooks/context'
      path: '/reacthooks/context'
      fullPath: '/reacthooks/context'
      preLoaderRoute: typeof ReacthooksContextImport
      parentRoute: typeof rootRoute
    }
    '/reacthooks/deferredvalue': {
      id: '/reacthooks/deferredvalue'
      path: '/reacthooks/deferredvalue'
      fullPath: '/reacthooks/deferredvalue'
      preLoaderRoute: typeof ReacthooksDeferredvalueImport
      parentRoute: typeof rootRoute
    }
    '/reacthooks/optimistic': {
      id: '/reacthooks/optimistic'
      path: '/reacthooks/optimistic'
      fullPath: '/reacthooks/optimistic'
      preLoaderRoute: typeof ReacthooksOptimisticImport
      parentRoute: typeof rootRoute
    }
    '/reacthooks/syncexternalstore': {
      id: '/reacthooks/syncexternalstore'
      path: '/reacthooks/syncexternalstore'
      fullPath: '/reacthooks/syncexternalstore'
      preLoaderRoute: typeof ReacthooksSyncexternalstoreImport
      parentRoute: typeof rootRoute
    }
    '/reacthooks/transition': {
      id: '/reacthooks/transition'
      path: '/reacthooks/transition'
      fullPath: '/reacthooks/transition'
      preLoaderRoute: typeof ReacthooksTransitionImport
      parentRoute: typeof rootRoute
    }
    '/reacthooks/use': {
      id: '/reacthooks/use'
      path: '/reacthooks/use'
      fullPath: '/reacthooks/use'
      preLoaderRoute: typeof ReacthooksUseImport
      parentRoute: typeof rootRoute
    }
    '/reacthooks/': {
      id: '/reacthooks/'
      path: '/reacthooks'
      fullPath: '/reacthooks'
      preLoaderRoute: typeof ReacthooksIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/counter': typeof CounterRoute
  '/form': typeof FormRoute
  '/reacthooks/context': typeof ReacthooksContextRoute
  '/reacthooks/deferredvalue': typeof ReacthooksDeferredvalueRoute
  '/reacthooks/optimistic': typeof ReacthooksOptimisticRoute
  '/reacthooks/syncexternalstore': typeof ReacthooksSyncexternalstoreRoute
  '/reacthooks/transition': typeof ReacthooksTransitionRoute
  '/reacthooks/use': typeof ReacthooksUseRoute
  '/reacthooks': typeof ReacthooksIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/counter': typeof CounterRoute
  '/form': typeof FormRoute
  '/reacthooks/context': typeof ReacthooksContextRoute
  '/reacthooks/deferredvalue': typeof ReacthooksDeferredvalueRoute
  '/reacthooks/optimistic': typeof ReacthooksOptimisticRoute
  '/reacthooks/syncexternalstore': typeof ReacthooksSyncexternalstoreRoute
  '/reacthooks/transition': typeof ReacthooksTransitionRoute
  '/reacthooks/use': typeof ReacthooksUseRoute
  '/reacthooks': typeof ReacthooksIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/counter': typeof CounterRoute
  '/form': typeof FormRoute
  '/reacthooks/context': typeof ReacthooksContextRoute
  '/reacthooks/deferredvalue': typeof ReacthooksDeferredvalueRoute
  '/reacthooks/optimistic': typeof ReacthooksOptimisticRoute
  '/reacthooks/syncexternalstore': typeof ReacthooksSyncexternalstoreRoute
  '/reacthooks/transition': typeof ReacthooksTransitionRoute
  '/reacthooks/use': typeof ReacthooksUseRoute
  '/reacthooks/': typeof ReacthooksIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/counter'
    | '/form'
    | '/reacthooks/context'
    | '/reacthooks/deferredvalue'
    | '/reacthooks/optimistic'
    | '/reacthooks/syncexternalstore'
    | '/reacthooks/transition'
    | '/reacthooks/use'
    | '/reacthooks'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/counter'
    | '/form'
    | '/reacthooks/context'
    | '/reacthooks/deferredvalue'
    | '/reacthooks/optimistic'
    | '/reacthooks/syncexternalstore'
    | '/reacthooks/transition'
    | '/reacthooks/use'
    | '/reacthooks'
  id:
    | '__root__'
    | '/'
    | '/counter'
    | '/form'
    | '/reacthooks/context'
    | '/reacthooks/deferredvalue'
    | '/reacthooks/optimistic'
    | '/reacthooks/syncexternalstore'
    | '/reacthooks/transition'
    | '/reacthooks/use'
    | '/reacthooks/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CounterRoute: typeof CounterRoute
  FormRoute: typeof FormRoute
  ReacthooksContextRoute: typeof ReacthooksContextRoute
  ReacthooksDeferredvalueRoute: typeof ReacthooksDeferredvalueRoute
  ReacthooksOptimisticRoute: typeof ReacthooksOptimisticRoute
  ReacthooksSyncexternalstoreRoute: typeof ReacthooksSyncexternalstoreRoute
  ReacthooksTransitionRoute: typeof ReacthooksTransitionRoute
  ReacthooksUseRoute: typeof ReacthooksUseRoute
  ReacthooksIndexRoute: typeof ReacthooksIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CounterRoute: CounterRoute,
  FormRoute: FormRoute,
  ReacthooksContextRoute: ReacthooksContextRoute,
  ReacthooksDeferredvalueRoute: ReacthooksDeferredvalueRoute,
  ReacthooksOptimisticRoute: ReacthooksOptimisticRoute,
  ReacthooksSyncexternalstoreRoute: ReacthooksSyncexternalstoreRoute,
  ReacthooksTransitionRoute: ReacthooksTransitionRoute,
  ReacthooksUseRoute: ReacthooksUseRoute,
  ReacthooksIndexRoute: ReacthooksIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/counter",
        "/form",
        "/reacthooks/context",
        "/reacthooks/deferredvalue",
        "/reacthooks/optimistic",
        "/reacthooks/syncexternalstore",
        "/reacthooks/transition",
        "/reacthooks/use",
        "/reacthooks/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/counter": {
      "filePath": "counter.tsx"
    },
    "/form": {
      "filePath": "form.tsx"
    },
    "/reacthooks/context": {
      "filePath": "reacthooks/context.tsx"
    },
    "/reacthooks/deferredvalue": {
      "filePath": "reacthooks/deferredvalue.tsx"
    },
    "/reacthooks/optimistic": {
      "filePath": "reacthooks/optimistic.tsx"
    },
    "/reacthooks/syncexternalstore": {
      "filePath": "reacthooks/syncexternalstore.tsx"
    },
    "/reacthooks/transition": {
      "filePath": "reacthooks/transition.tsx"
    },
    "/reacthooks/use": {
      "filePath": "reacthooks/use.tsx"
    },
    "/reacthooks/": {
      "filePath": "reacthooks/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
