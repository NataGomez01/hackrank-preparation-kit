function miniMaxSum(arr: number[]): void {
    let resMaxNumbers:number = 0
    let resMinNumbers:number = 0
    
    for (let i:number = 0; i < arr.length; i++) {
        let quantityOfSmallerNumbers:number = 0
        let quantityOfBiggerNumbers:number = 0
        let quantityOfEqualsNumbers:number = 0
        
        for(let h:number = 0; h < arr.length; h++) {
            if(arr[i] > arr[h] && arr[i] != arr[h]) {
                quantityOfSmallerNumbers++
            } else if (arr[i] < arr[h] && arr[i] != arr[h]) {
                quantityOfBiggerNumbers++
            } else if (arr[i] == arr[h]) {
                quantityOfEqualsNumbers++
            }
        }
        
        if (quantityOfSmallerNumbers < arr.length - 1) {
            resMinNumbers = resMinNumbers + arr[i]
        }
        
        if (quantityOfBiggerNumbers < arr.length - 1) {
            resMaxNumbers = resMaxNumbers + arr[i]
        }
        
        if (quantityOfEqualsNumbers == 5) {
            resMaxNumbers = arr[i] * 4
            resMinNumbers = arr[i] * 4
        }
    }
    
    const res:string = `${resMinNumbers} ${resMaxNumbers}`
    console.log(res)
}