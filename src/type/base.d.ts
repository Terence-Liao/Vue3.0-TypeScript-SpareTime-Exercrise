export interface dataProps {
    msg?:string 
    labels?: string[]
}

export interface Book {
    title: string
    author: string
    year: number
}

let peanutSize: number;

export interface uploadDataProps {
    fileLimit:number,
    acceptType:'',
    downloadLoading?: boolean,
    loadingText?: string,
}

