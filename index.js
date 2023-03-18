const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
    SCALE: 4,
};


window.onload = function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const sagat = document.querySelector('img');

    context.strokeStyle = "yellow";
    context.moveTo(0, 0);
    context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    context.moveTo(GameViewport.WIDTH, 0);
    context.lineTo(0, GameViewport.HEIGHT);
    context.stroke();

    context.drawImage(sagat, 0, 0);

    console.log(context);
}