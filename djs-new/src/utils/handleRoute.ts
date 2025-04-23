import { useDocsStore } from '@/stores/docs';
import type { RouteLocation } from 'vue-router';

export default function handleRoute(route: RouteLocation) {
  const router = useRouter();
  const docsStore = useDocsStore();
  const {
    sources: { main: MainSource },
  } = docsStore;

  if (route.params.source && docsStore.sources[route.params.source as string]) {
    docsStore.setSource(route.params.source as string);
  } else {
    router.replace({
      name: 'docs-file',
      params: {
        source: MainSource.id,
        tag: MainSource.defaultTag,
        category: MainSource.defaultFile.category,
        file: MainSource.defaultFile.id,
      },
    });
    return;
  }

  if (route.params.tag) {
    docsStore.setTag(route.params.tag as string);
  } else {
    router.replace({
      name: 'docs-file',
      params: {
        source: docsStore.source.id,
        tag: docsStore.source.recentTag || docsStore.source.defaultTag,
        category: docsStore.source.defaultFile.category,
        file: docsStore.source.defaultFile.id,
      },
    });
  }

  if (
    !route.params.file &&
    !route.params.class &&
    !route.params.function &&
    !route.params.typedef &&
    route.name !== 'docs-search'
  ) {
    router.replace({
      name: 'docs-file',
      params: {
        source: docsStore.source.id,
        tag: docsStore.tag,
        category: docsStore.source.defaultFile.category,
        file: docsStore.source.defaultFile.id,
      },
    });
  }
}
