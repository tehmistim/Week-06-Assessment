const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test('id should match', () => {
        const obj = {
        id: '7',
        name: 'Beta', 
        imgAddress: 'https://robohash.org/beta',
        health: 95
    };
        expect(obj.id).toEqual('3')   //ID should equal obj id but will fail seeing that id number is different here

    });

     test('name in shuffleArray', () => {
         expect("Prime Information Drone").toContain("Drone")
    })

});

