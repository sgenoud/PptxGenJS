import { getUuid } from '../gen-utils'
import ElementInterface from './element-interface'
import Position from './position'

export type PlaceholderOptions = {
    name: string
    type: string
}

export default class Placeholder implements ElementInterface {
    public name: string
    public position: Position
    public fieldId: string

    public placeholderType
    protected placeholderIndex

    constructor(name, type = 'body', index) {
        this.name = name
        this.fieldId = getUuid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
        this.placeholderType = type
        this.placeholderIndex = index
    }

    renderPlaceholderInfo() {
        return `<p:ph idx="${this.placeholderIndex}" type="${this.placeholderType}" />`
    }

    renderFldProps() {
        // https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_fld_topic_ID0E45SKB.html
        let type
        switch (this.placeholderType) {
            case 'sldNum':
                type = 'slidenum'
                break
            case 'dt':
                type = 'datetimeFigureOut'
                break
        }
        if (!type) return

        return `id="{${this.fieldId}}" type="${type}"`
    }

    public render(idx, presLayout) {
        throw new Error('not implemented')
        return ''
    }
}
