// ***** BEGINNING OF PRACTICE: REPRESENT YOUR PET ***** //

// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

// const AtticusTheCat = {
//     name: "Atticus",
//     species: "Tabby Cat",
//     nickname: "Cat",
//     age: 3
// }

// console.log(AtticusTheCat)

//  ***** BEGINNING OF PRACTICE: PET SOUNDS ***** //

// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior. For example:

// angus.bark()
// angus.whine()
// angus.pant()

// const AtticusTheCat = {
//     name: "Atticus",
//     species: "Tabby Cat",
//     nickname: "Cat",
//     age: 3,
//     contentsOfStomach: [],
//     purrs: function (something) {
//         window.alert(`Atticus purrs ${something}.`)
//     },
//     eats: function(food) {
//         AtticusTheCat.contentsOfStomach.push(food)
//     },
//     pukes: function (food) {
//         AtticusTheCat.contentsOfStomach.length = 0
//     }
// }

// console.log(AtticusTheCat)

// AtticusTheCat.purrs("when his belly is rubbed")
// AtticusTheCat.eats("Cheerios")
// AtticusTheCat.pukes()

// ***** BEGINNING OF PRACTICE: MY PET "THIS" ***** //


// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.

const AtticusTheCat = {
    name: "Atticus",
    species: "Tabby Cat",
    nickname: "Cat",
    age: 3,
    contentsOfStomach: [],
    purrs: function (something) {
        window.alert(`Atticus purrs ${something}.`)
    },
    eats: function(food) {
        AtticusTheCat.contentsOfStomach.push(food)
    },
    pukes: function (food) {
        AtticusTheCat.contentsOfStomach.length = 0
    },
    favoriteToys: [],
    play: function(toy) {
        if (toy === "ball" || "mouse") {
            this.favoriteToys.push(toy)
        }
    }
}

AtticusTheCat.play("ball")
console.log(AtticusTheCat)

AtticusTheCat.play("mouse")
console.log(AtticusTheCat)