/// <reference path="_references.ts" />
(function () {
    // Global variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetsManager;
    var assetsManifest;
    var currentScene;
    var currentState;
    var keyboardManager;
    assetsManifest = [
        { id: "startButton", src: "/Assets/images/startButton.png" },
        { id: "dieButton", src: "/Assets/images/dieButton.png" },
        { id: "grass", src: "/Assets/images/grass.png" },
        { id: "restartButton", src: "/Assets/images/startButton.png" },
        { id: "orange", src: "/Assets/images/orange.png" },
        { id: "wall", src: "/Assets/images/wall.png" },
        { id: "coin", src: "/Assets/images/coin.png" },
        { id: "backMusic", src: "/Assets/audio/backgroundMusic.mp3" },
        { id: "coinSound", src: "/Assets/audio/coinSound.mp3" }
    ];
    function Init() {
        console.log("Initialization start...");
        assetsManager = new createjs.LoadQueue();
        assetsManager.installPlugin(createjs.Sound);
        assetsManager.loadManifest(assetsManifest);
        assetsManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard();
        objects.Game.keyboardManager = keyboardManager;
        Main();
    }
    function Update() {
        if (currentState != objects.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        stage.removeAllChildren();
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                console.log("Game Start...");
                currentScene = new scenes.StartScene(assetsManager);
                break;
            case config.Scene.PLAY:
                console.log("Let's Play...");
                currentScene = new scenes.PlayScene(assetsManager);
                break;
            case config.Scene.OVER:
                console.log("Game over...");
                currentScene = new scenes.OverScene(assetsManager);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map