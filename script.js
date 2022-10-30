var names = ["Yaakov", "John", "Jackson", "Jason", "Paul", "Frank", "Larry", "Paul", "Lane", "Jim"];

for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
}
