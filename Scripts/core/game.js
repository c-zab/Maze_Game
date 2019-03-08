/// <reference path="_references.ts" />
(function () {
    // Global variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetsManager;
    var assetsManifest;
    var currentScene;
    var currentState;
    assetsManifest = [{ id: "startButton", src: "/Assets/images/button.png" }];
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
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
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
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                console.log("Game Start...");
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetsManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.PLAY:
                console.log("Let's Play...");
                break;
            case config.Scene.OVER:
                console.log("Game over...");
                break;
        }
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map