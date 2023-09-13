import { api } from '@converse/headless';
import { CustomElement } from './element.js';
import { html } from 'lit';

export class ConverseBrandLogo extends CustomElement {
    render() {
        // eslint-disable-line class-methods-use-this
        const is_fullscreen = api.settings.get('view_mode') === 'fullscreen';
        return html`
            <a class="brand-heading" href="https://conversejs.org" target="_blank" rel="noopener">
                <span class="brand-name-wrapper ${is_fullscreen ? 'brand-name-wrapper--fullscreen' : ''}">
                    <img src="images/logo-white.png" />
                </span>
            </a>
        `;
    }
}

api.elements.define('converse-brand-logo', ConverseBrandLogo);
