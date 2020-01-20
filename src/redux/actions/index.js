
export const addData = (id) => {
    console.log('hello from add to cart' + id)
    return (
        {
            type: "ADD_ITEM",
            id,
        }
    )
}

export const subData = (id) => {
    console.log('hello from subtract to cart' + id)
    return (
        {
            type: "SUB_ITEM",
            id,
        }
    )
}


export const viewData = (id) => {
    console.log('hello from detail List' + id)
    return (
        {
            type: "VIEW_ITEM",
            id,
        }
    )
}

export const removeData = (id) => {
    console.log('hello from remove data' + id)
    return (
        {
            type: "REMOVE_ITEM",
            id,
        }
    )
}