const dynastyReign = [
    {
        name: "San Dynasty",
        year: "MXLI", //1041
    },
    {
        name: "Viloria Dynasty",
        year: "MCCCIIII", //Invalid
    },
    {
        name: "Tan Dynasty",
        year: "MCCCXCVIII", //1398
    },
    {
        name: "Bon Dynasty",
        year: "MCDXLV", //1445
    },
    {
        name: "Maiko Dynasty",
        year: "MDCLXIV", // 1664
    },
    {
        name: "Paul Dynasty",
        year: "MCMXLIX", //1949
    },
    {
        name: "Andre Dynasty",
        year: "MMMXICX", //Invalid
    },
];

const longestDynasty = () => {
    if (dynastyReign.length === 0) {
        return "No Data";
    }else{
        let longestReign = 0;
        let longestDynastyName = "";

        dynastyReign.forEach((currentDynasty) => {
            const endYear = convertYear(currentDynasty.year);

            if (endYear === "Invalid") {
                return;
            }

        const reignDuration = endYear - 1000;

            if (reignDuration > longestReign) {
                longestReign = reignDuration;
                longestDynastyName = currentDynasty.name;
            }
        });

        return longestDynastyName;
    }
};


const convertYear = (romanYear) => {
    const romanNumerals = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };

    const regex =/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    if (!regex.test(romanYear)) {
        return "Invalid";
    }else{
        let year = 0;
        for (let i = 0; i < romanYear.length; i++) {
            const currentSymbol = romanYear[i];
            const nextSymbol = romanYear[i + 1];
                if (romanNumerals[currentSymbol] < romanNumerals[nextSymbol]) {
                    year -= romanNumerals[currentSymbol];
                } else {
                    year += romanNumerals[currentSymbol];
                }
        }
        return year;
    }
};

console.log("Longest reigning dynasty:", longestDynasty());