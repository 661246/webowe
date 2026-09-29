declare module 'bootstrap' {
  export class Modal {
    constructor(element: Element | string, options?: object);
    toggle(): void;
    show(): void;
    hide(): void;
    handleUpdate(): void;
    static getInstance(element: Element | string): Modal | null;
    static getOrCreateInstance(element: Element | string, options?: object): Modal;
  }
}
