import { html } from 'lit-html'
import buildAndRegisterCustomElement from './utils/build-custom-element'
import A from 'test/a'

buildAndRegisterCustomElement('test-a', A)

export default {
  title: 'components/A',
}

export const Default = () => html`<test-a></test-a>`
