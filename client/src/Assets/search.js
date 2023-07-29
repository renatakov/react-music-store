 export const searchFn = (q, text) => {
    const reg = new RegExp(q, "i")
    return reg.test(text)
}

