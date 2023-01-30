import type {AnchorAlignment, AnchorSide, PositionSettings} from '@primer/behaviors'
import {getAnchoredPosition} from '@primer/behaviors'

export default class AnchoredPositionElement extends HTMLElement implements PositionSettings {
  get align(): AnchorAlignment {
    const value = this.getAttribute('align')
    if (value === 'center' || value === 'end') return value
    return 'start'
  }

  set align(value: AnchorAlignment) {
    this.setAttribute('align', `${value}`)
  }

  get side(): AnchorSide {
    const value = this.getAttribute('side')
    if (
      value === 'inside-top' ||
      value === 'inside-bottom' ||
      value === 'inside-left' ||
      value === 'inside-right' ||
      value === 'inside-center' ||
      value === 'outside-top' ||
      value === 'outside-left' ||
      value === 'outside-right'
    ) {
      return value
    }
    return 'outside-bottom'
  }

  set side(value: AnchorSide) {
    this.setAttribute('side', `${value}`)
  }

  get anchorOffset(): number {
    return Number(this.getAttribute('anchor-offset')) ?? 4
  }

  set anchorOffset(value: number) {
    this.setAttribute('anchor-offset', `${value}`)
  }

  get anchor() {
    return this.getAttribute('anchor') || ''
  }

  set anchor(value: string) {
    this.setAttribute('anchor', `${value}`)
  }

  #anchorElement: HTMLElement | null = null
  get anchorElement(): HTMLElement | null {
    if (this.#anchorElement) return this.#anchorElement
    const idRef = this.anchor
    if (!idRef) return null
    return this.ownerDocument.getElementById(idRef)
  }

  set anchorElement(value: HTMLElement | null) {
    this.#anchorElement = value
    if (!this.#anchorElement) {
      this.removeAttribute('anchor')
    }
  }

  get alignmentOffset(): number {
    return 4
  }

  set alignmentOffset(value: number) {
    this.setAttribute('alignment-offset', `${value}`)
  }

  get allowOutOfBounds() {
    return this.hasAttribute('allow-out-of-bounds')
  }

  set allowOutOfBounds(value: boolean) {
    this.toggleAttribute('allow-out-of-bounds', value)
  }

  connectedCallback() {
    this.update()
  }

  attributeChangedCallback() {
    this.update()
  }

  update() {
    if (!this.isConnected) return
    const anchor = this.anchorElement
    if (anchor) getAnchoredPosition(this, anchor, this)
  }
}

if (!customElements.get('anchored-position')) {
  window.AnchoredPositionElement = AnchoredPositionElement
  customElements.define('anchored-position', AnchoredPositionElement)
}

declare global {
  interface Window {
    AnchoredPositionElement: typeof AnchoredPositionElement
  }
}
