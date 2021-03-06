import Placeholder, { PlaceholderOptions } from './placeholder'
import Relations from '../relations'

import TextElement, { TextOptions } from './text'

export type PlaceholderTextOptions = TextOptions & PlaceholderOptions

export default class PlaceholderText extends Placeholder {
    private textElement

    constructor(
        text: string,
        options: PlaceholderTextOptions,
        index: number,
        relations: Relations
    ) {
        super(options.name, options.type, index)
        const { name, type = 'body', ...textOptions } = options

        // We default to no bullet in the placeholder (different from the slide
        // that inherits by default)
        if (!textOptions.bullet) textOptions.bullet = false

        this.textElement = new TextElement(text, textOptions, relations)
    }

    get position() {
        return this.textElement.position
    }

    renderPlaceholderInfo() {
        return `<p:ph idx="${this.placeholderIndex}" type="${
            this.placeholderType
        }" ${
            this.textElement.fragments.length > 0 ? ' hasCustomPrompt="1"' : ''
        } />`
    }

    render(idx, presLayout) {
        return this.textElement.render(idx, presLayout, this)
    }
}
