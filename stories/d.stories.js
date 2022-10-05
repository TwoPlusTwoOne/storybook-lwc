import { html } from 'lit-html'
import buildAndRegisterCustomElement from './utils/build-custom-element'
import D from 'test/d'

buildAndRegisterCustomElement('test-d', D)

export default {
  title: 'components/D',
}

export const Default = () => html`<test-d></test-d>`
