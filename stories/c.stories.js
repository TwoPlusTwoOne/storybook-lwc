import { html } from 'lit-html'
import buildAndRegisterCustomElement from './utils/build-custom-element'
import C from 'test/c'

buildAndRegisterCustomElement('test-c', C)

export default {
  title: 'components/C',
}

export const Default = () => html`<test-c></test-c>`
