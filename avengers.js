// 1. The following JSON string consists of? 4.) 


// `[{"name":"Bernard","age":55, "date":${date.now()}}]`

// Is it:
// 1. An Array
// 2. An Object
// 3. An Array inside an object
// 4. An object inside an array
//An object inside an array


// 2. The  JSON string consists of? 1.) 

// `[{"name":"Bernard","age":55, "date":${date.now()}},{{"name":"Johnathon","age":60, "date":${date.now()}}}]`

// Is it:
// 1. An Array with 2 objects
// 2. An Object with 2 objects
// 3. An Array
// 4. An object inside an array
//An Array with 2 objects


// 3. The  JSON string consists of? 1.)

// `[{"name":"Bernard","age":55, "date":${date.now()}},{{"name":"Johnathon","age":60, "date":${date.now()}}}]`

// Is it:
// 1. valid
// 2. invalid
//valid

let avengers=`{
    "heroes": [{
            "name": "Tony Stark",
            "alias": "Iron Man",
            "abilities": "Armor Suit",
            "age": 48
        },
        {
            "name": "James Rhodes",
            "alias": "War Machine",
            "abilities": "Armored suit like Iron Man",
            "age": 41
        },
        {
            "name": "Scott Lang",
            "alias": "Ant-Man",
            "abilities": "Can grow small or large",
            "age": 49
        },
        {
            "name": "Thor Odinson",
            "alias": "Thor",
            "abilities": "Can summon Lightning, Can summon his hammer",
            "age": 1500
        },
        {
            "name": "Steve Rogers",
            "alias": "Captain America",
            "abilities": "Throw and catch his shield, has super strength",
            "age": 90
        },
        {
            "name": "Wanda Maximoff",
            "alias": "Scarlet Witch",
            "abilities": "Reality Warping",
            "age": 28
        },
        {
            "name": "Bruce Banner",
            "alias": "Hulk",
            "abilities": "Super strength, ability to grow larger when more angry, ability to turn into a super destroyer when super angry",
            "age": 49
        },
        {
            "name": "Janet DyneWasp",
            "alias": "Wasp",
            "abilities": "shrink to a height of wasp, flys with wings, and fires energy blasts.",
            "age": 26
        },
        {
            "name": "Peter Parker",
            "alias": "Spiderman",
            "abilities": "Web Slinging, Spidy Sense(Precognition)",
            "age": 16
        },
        {
            "name": "Natasha Romanova",
            "alias": "Black Widow",
            "abilities": "Martial Arts, Weapons",
            "age": 32
        },
        {
            "name": "Matthew Michael Murdock",
            "alias": "Daredevil",
            "abilities": "Echolocation, Martial Arts",
            "age": 26
        },
        {
            "name": "James Howlett",
            "alias": "Wolverine",
            "abilities": "Regeneration, Slow Aging, Indestructible Bones, Superhuman Senses, Enhanced Everyhting, Unbreakable Retractable Claws",
            "age": 200
        },
        {
            "name": "The Vision",
            "alias": "Vision",
            "abilities": "Superhuman intelligence, strength, speed Superhuman senses, Density control (intangibility, invulnerability), Flight, Regeneration, Solar energy projection, Holographic disguise, Technopathy",
            "age": 3
        },
        {
            "name": "Clint Barton",
            "alias": "Hawkeye",
            "abilities": "Master Archer, Martial Prowess",
            "age": 20
        },
        {
            "name": "T'challa",
            "alias": "Black Panther",
            "abilities": "Enhanced speed, agility, strength, and durability",
            "age": 27
        }
    ]
}`

for(v of JSON.parse(avengers).heroes){
  console.log("age:",v.age)
}
