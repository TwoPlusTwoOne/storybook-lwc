import { html } from 'lit-html'
import buildAndRegisterCustomElement from './utils/build-custom-element'
import B from 'test/b'

buildAndRegisterCustomElement('test-b', B)

export default {
  title: 'components/B',
}

export const Default = () => html`<test-b></test-b>`
