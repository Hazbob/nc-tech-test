export interface Page {
    title: string,
    templateId: string
}

export interface Cards {
    id: string
    title: string
    sizes: string[]
    basePrice: number
    pages: Page[]
}

export interface Template {
    id: string
    width: number
    height: number
    imageUrl: string
}