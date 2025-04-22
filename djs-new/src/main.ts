import './styles/master.scss';
// import 'highlight.js/styles/stackoverflow-light.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from '@highlightjs/vue-plugin';

hljs.registerLanguage('javascript', javascript);

const app = createApp(App);

app.use(router);
app.use(hljsVuePlugin);

app.mount('#app');
