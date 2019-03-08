(function() {
  // Global variables
  let canvas = document.getElementById("canvas");

  let stage: createjs.Stage;
  let helloLabel: objects.Label;

  function Init(): void {
    console.log("Initialization start");
    Start();
  }

  function Start(): void {
    console.log("Starting Application...");

    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    Main();
  }

  function Update(): void {
    stage.update();
  }

  function Main(): void {
    console.log("Game Start...");

    helloLabel = new objects.Label(
      "Start",
      "bold 60px",
      "Arial",
      "#ffffff",
      320,
      110,
      true
    );

    stage.addChild(helloLabel);
  }

  window.onload = Init;
})();
