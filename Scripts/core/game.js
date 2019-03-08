(function () {
    // Global variables
    var canvas = document.getElementById("canvas");
    var stage;
    var StartLabel;
    var Startbutton;
    function Init() {
        console.log("Initialization start");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("Game Start...");
        StartLabel = new objects.Label("Start", "bold 60px", "Arial", "#ffffff", 320, 110, true);
        stage.addChild(StartLabel);
        Startbutton = new objects.Button("/Assets/images/button.png", 320, 340);
        Startbutton.regX = Startbutton.getBounds().width * 0.5;
        Startbutton.regY = Startbutton.getBounds().height * 0.5;
        Startbutton.on("mousedown", mouseClickButton);
        stage.addChild(Startbutton);
        tween();
    }
    // width = "640" 320 height = "480" 240
    function tween() {
        createjs.Tween.get(Startbutton, { loop: -1 })
            .to({ x: 320, y: 330 }, 500)
            .to({ x: 320, y: 340 }, 500);
    }
    function mouseClickButton() {
        StartLabel.text = "Clicked";
        StartLabel.regX = StartLabel.getMeasuredWidth() * 0.5;
        StartLabel.regY = StartLabel.getMeasuredHeight() * 0.5;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map