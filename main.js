var canvas = new fabric.Canvas("myCanvas");

player_x = "10";
player_y = "10";
var player_object = "";

function player_update() {
    fabric.Image.fromURL("spider man.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });

    function new_image()