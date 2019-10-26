    // Exercise 1 - Maybe use an Arrow Function?
    let double = (value: number): number => {
        return value * 2;
    };
    console.log(double(10));
     
    // Exercise 2 - If only we could provide some default values...
    let greetings = (name: string = "no name"): void => {
        console.log("Hello, " + name);
    };
    greetings();
    greetings("Anna");
     
    // Exercise 3 - Isn't there a shorter way to get all these Values?
    let meNumbers: number[] = [-3, 33, 38, 5];
    console.log(Math.min(...meNumbers));
     
    // Exercise 4 - I have to think about Exercise 3 ...
    let newArray: number[] = [55, 20];
    newArray.push(...meNumbers);
    console.log(newArray);
     
    // Exercise 5 - That's a well-constructed array.
    let testResults = [3.89, 2.99, 1.38];
    let [result1, result2, result3] = testResults;
    console.log(result1, result2, result3);
     
    // Exercise 6 - And a well-constructed object!
    let scientist = {firstName: "Will", experience: 12};
    let {firstName, experience} = scientist;
    console.log(firstName, experience);