function plusMinus(arr: number[], n: number): void {
    let positiveNumbers:number = 0, negativeNumbers:number = 0, neutralNumbers:number = 0
    
    for(let i:number = 0; i < n; i++) {
        if(arr[i] > 0) {
            positiveNumbers++
        } else if(arr[i] < 0) {
            negativeNumbers++
        } else {
            neutralNumbers++
        }
    }
    
    const positiveRatio: number = positiveNumbers / n
    const negativeRatio: number = negativeNumbers / n
    const neutralRatio: number = neutralNumbers / n
    
    console.log(positiveRatio.toFixed(6))
    console.log(negativeRatio.toFixed(6))
    console.log(neutralRatio.toFixed(6))
}