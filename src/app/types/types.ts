export type ExchangeData =  { 
    code : string , 
    name : string , 
    price : number
}


export type Currency = { 
    id : number , 
    name : string , 
    code : string , 
    prefix : string , 
    flags : string, 
    enabled : boolean , 
    countries : Countries[]
}

export type Countries = { 
    id : string 
    name : string 
} 