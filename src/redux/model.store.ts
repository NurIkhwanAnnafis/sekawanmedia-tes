export type IStore = {
    notification: { list: Array<{ id: string; title: string }> },
    layout: { loading: boolean; isMobile: boolean }
}