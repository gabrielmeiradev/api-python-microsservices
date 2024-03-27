export const awaitDom = (script) => {
    setTimeout(() => {
        script()
    }, 600)
}