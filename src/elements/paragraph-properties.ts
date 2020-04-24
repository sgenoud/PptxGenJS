import { TEXT_VALIGN, TEXT_HALIGN } from '../core-enums'

import Bullet, { BulletOptions } from './bullet'

const alignment = align => {
    switch (align) {
        case 'left':
            return ' algn="l"'
        case 'right':
            return ' algn="r"'
        case 'center':
            return ' algn="ctr"'
        case 'justify':
            return ' algn="just"'
        default:
            return ''
    }
}

export interface ParagraphPropertiesOptions {
    rtlMode?: boolean
    paraSpaceBefore?: number | string
    paraSpaceAfter?: number | string
    indentLevel?: number | string
    bullet?: BulletOptions
    align?: string
    lineSpacing?: number | string
}

export default class ParagraphProperties {
    bullet: Bullet
    align: TEXT_HALIGN
    lineSpacingVal?: string
    lineSpacingType?: 'spcPct' | 'spcPts'
    indentLevel?: number
    paraSpaceBefore?: number
    paraSpaceAfter?: number
    rtlMode?: boolean

    constructor({
        rtlMode,
        paraSpaceBefore,
        paraSpaceAfter,
        indentLevel,
        bullet,
        align,
        lineSpacing
    }) {
        if (
            indentLevel &&
            !isNaN(Number(indentLevel)) &&
            Number(this.indentLevel) > 0
        ) {
            this.indentLevel = Number(indentLevel)
        }
        if (
            paraSpaceBefore &&
            !isNaN(Number(paraSpaceBefore)) &&
            Number(this.paraSpaceBefore) > 0
        ) {
            this.paraSpaceBefore = Number(paraSpaceBefore)
        }
        if (
            paraSpaceAfter &&
            !isNaN(Number(paraSpaceAfter)) &&
            Number(this.paraSpaceAfter) > 0
        ) {
            this.paraSpaceAfter = Number(paraSpaceAfter)
        }

        this.bullet = new Bullet(bullet)

        const alignInput = (align || '').toLowerCase()
        if (alignInput.startsWith('c')) this.align = TEXT_HALIGN.center
        else if (alignInput.startsWith('l')) this.align = TEXT_HALIGN.left
        else if (alignInput.startsWith('r')) this.align = TEXT_HALIGN.right
        else if (alignInput.startsWith('j')) this.align = TEXT_HALIGN.justify

        this.rtlMode = rtlMode

        // https://c-rex.net/projects/samples/ooxml/e1/Part4/OOXML_P4_DOCX_lnSpc_topic_ID0E3KTKB.html?hl=a%3Alnspc
        if (typeof lineSpacing === 'number') {
            // backward compatibility - fallback Spacing Points
            this.lineSpacingType = 'spcPts'
            this.lineSpacingVal = `${lineSpacing}00`
        } else if (typeof lineSpacing === 'string') {
            const lnSpc = lineSpacing.toLowerCase()
            if (lnSpc.indexOf('pct') !== -1) {
                this.lineSpacingType = 'spcPct'
                this.lineSpacingVal = `${Number.parseFloat(lnSpc) * 1000}`
            } else if (lnSpc.indexOf('pts') !== -1) {
                this.lineSpacingType = 'spcPts'
                this.lineSpacingVal = `${Number.parseFloat(lnSpc) * 100}`
            }
        }
    }

    render(presLayout, tag: string, body: string = ''): string {
        return `
        <${tag} ${[
            this.rtlMode ? ' rtl="1" ' : '',
            alignment(this.align),
            this.indentLevel ? ` lvl="${this.indentLevel}"` : '',
            this.bullet.renderIndentProps(presLayout, this.indentLevel)
        ].join('')}>
          ${[
              // IMPORTANT: the body element require strict ordering - anything out of order is ignored. (PPT-Online, PPT for Mac)
              this.lineSpacingVal
                  ? `<a:lnSpc><a:${this.lineSpacingType} val="${this.lineSpacingVal}"/></a:lnSpc>`
                  : '',
              this.paraSpaceBefore
                  ? `<a:spcBef><a:spcPts val="${this.paraSpaceBefore *
                        100}"/></a:spcBef>`
                  : '',
              this.paraSpaceAfter
                  ? `<a:spcAft><a:spcPts val="${this.paraSpaceAfter *
                        100}"/></a:spcAft>`
                  : '',
              this.bullet.render()
          ].join('')}
			${body}
        </${tag}>
    `
    }
}
