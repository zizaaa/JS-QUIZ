const productProfitArray = [
    { name: "Product A", profit: 5 },
    { name: "Product B", profit: -70 },
    { name: "Product C", profit: 93 },
    { name: "Product D", profit: -5 },
    { name: "Product E", profit: 88 },
    { name: "Product F", profit: 29 },
    { name: "Product G", profit: 93.1 }, //test
];

    const topProduct=()=>{
        return productProfitArray.reduce((prev,curr)=> curr.profit > prev.profit ? curr : prev)
    };
    console.log(topProduct());

    const bottomProduct=()=>{
        return productProfitArray.reduce((prev,curr)=> curr.profit < prev.profit ? curr : prev)
    };
    console.log(bottomProduct());

    const zeroProfitProduct=()=>{
        return productProfitArray.reduce((prev,curr)=> Math.abs(curr.profit) < Math.abs(prev.profit) ? curr : prev)
    };
    console.log(zeroProfitProduct());