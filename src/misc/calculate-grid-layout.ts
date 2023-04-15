
export const   calculateGrid = (variant: number = 1, index: number) => {
    

    if(variant == 1) {
        if(index == 0 ) return "row-span-2"
        else if(index == 3) return "col-span-2"
        else return ""
    }

    else {
        if(index == 0 ) return ""
        else if(index == 3) return "col-span-2"
        else return ""
    }
   
}