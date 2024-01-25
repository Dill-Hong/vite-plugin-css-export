import { createApp } from 'vue'
import App from './App.vue'

// will be injected into the page
import cssResult from '../style/example.css?export'
// will not be injected
import cssResultWithInline from '../style/example.css?export&inline'
import scssResult from '../style/example.scss?export&inline'
import sassResult from '../style/example.sass?export&inline'
import lessResult from '../style/example.less?export&inline'
import stylResult from '../style/example.styl?export&inline'
import stylusResult from '../style/example.stylus?export&inline'
import {
  default as cssModuleResult,
  cssExportedData
} from '../style/example.module.scss?export'
import cssModuleInlineResult from '../style/example.module.scss?export&inline'
import transformerResult from '../style/example-transformer.scss?export&inline'
import shouldTransformResult from '../style/share-to-js/index.scss?inline'

console.log('.css', cssResult)
console.log('.css inline', cssResultWithInline)
console.log('.scss', scssResult)
console.log('.sass', sassResult)
console.log('.less', lessResult)
console.log('.styl', stylResult)
console.log('.stylus', stylusResult)
console.log('css module', cssModuleResult, cssExportedData)
console.log('css module inline', cssModuleInlineResult)
console.log('transformer', transformerResult)
console.log('shouldTransformResult', shouldTransformResult)

createApp(App).mount('#app')
