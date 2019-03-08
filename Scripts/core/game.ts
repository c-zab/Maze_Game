/// <reference path="_references.ts" />

(function() {
  // Global variables
  let canvas = document.getElementById("canvas");

  let stage: createjs.Stage;
  let StartLabel: objects.Label;
  let startbutton: objects.Button;

  let assetsManager: createjs.LoadQueue;
  let assetsManifest: any[];

  assetsManifest = [{ id: "startButton", src: "/Assets/images/button.png" }];

  function Init(): void {
    console.log("Initialization start");
    assetsManager = new createjs.LoadQueue();
    assetsManager.installPlugin(createjs.Sound);
    assetsManager.loadManifest(assetsManifest);
    assetsManager.on("complete", Start, this);
  }

  function Start(): void {
    console.log("Starting Application...");

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    Main();
  }

  function Update(): void {
    stage.update();
  }

  function Main(): void {
    console.log("Game Start...");

    StartLabel = new objects.Label(
      "Start",
      "bold 60px",
      "Arial",
      "#ffffff",
      320,
      110,
      true
    );

    stage.addChild(StartLabel);

    startbutton = new objects.Button(assetsManager, "startButton", 320, 340);

    startbutton.on("mousedown", mouseClickButton);

    stage.addChild(startbutton);

    tween();
  }
  // width = "640" 320 height = "480" 240
  function tween() {
    createjs.Tween.get(startbutton, { loop: -1 })
      .to({ x: 320, y: 330 }, 500)
      .to({ x: 320, y: 340 }, 500);
  }

  function mouseClickButton(): void {
    StartLabel.text = "Clicked";
    StartLabel.regX = StartLabel.getMeasuredWidth() * 0.5;
    StartLabel.regY = StartLabel.getMeasuredHeight() * 0.5;
  }

  window.onload = Init;
})();
