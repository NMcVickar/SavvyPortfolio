import Victor from 'victor';

function Game(){
    // bounds
    var topLeft = new Victor(20, 470);
    var bottomRight = new Victor(900, 730);

    // => x: 10, y: 166 (one random component randomized)
    return Victor(460, 600)
        .randomizeAny(topLeft, bottomRight)
        .toObject();
}

export default function Dot(){
    var coordinates = Game();

    console.log(coordinates);
    
    return `
<div class="dot" style="top:${coordinates.y};right:${coordinates.x}">
</div>
`;
}

// track mouse

// window.addEventListener('mousemove', (event) => {
//     MouseMove(event);
// });


//     var vec1 = new Victor(582, 340);

//     console.log(vec1);
//     vec1.toString();
//     // => x: 582, y:340

//     var vec2 = Victor(100, 200);

//     vec2.toString();
// // => x: 100, y:200