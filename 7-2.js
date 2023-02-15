const scores = []

const players = [
    {
        "id": 1,
        "name": "Ivan",
        "scorePoints": 4500
     },
    {
        "id": 2,
        "name": "Petr",
        "scorePoints": 3600
    },
    {
        "id": 3,
        "name": "Vadim",
        "scorePoints": 3433
    },
    {
        "id": 4,
        "name": "Olga",
        "scorePoints": 2356
    },
    
    ];

for (let player of players) {
    scores.push(player.scorePoints)    

}
   
//console.log(scores)
//console.log(Math.max(...scores))

for (let player of players) {
    if (player.scorePoints == Math.max(...scores))

console.log(player.id, player.name, player.scorePoints)}









