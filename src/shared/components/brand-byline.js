import { CustomElement } from './element.js';
import { _converse, api } from '@converse/headless';
import { html } from 'lit';

export class ConverseBrandByline extends CustomElement {
    render() {
        // eslint-disable-line class-methods-use-this
        const is_fullscreen = api.settings.get('view_mode') === 'fullscreen';
        return html` ${is_fullscreen ? '' : ''} `;
    }
}

api.elements.define('converse-brand-byline', ConverseBrandByline);
