import Victor from 'Victor';

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