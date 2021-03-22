
let angle = 0;
let reduce_ratio = 0.7;
let len = 125;
let MAX = Math.pow(10, 5);
let INITIAL_STROKEWEIGHT = 10;
let slider;
let root;
let tree = [];
let leaves = [];


function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(width * 0.04);
  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - len);
  root = new Branch(a, b, INITIAL_STROKEWEIGHT);
  tree.push(root);
}

function mousePressed() {
  setInterval(buildTree,270);
 }

function buildTree(){
  if (tree.length <= MAX) {
    for (let i = tree.length - 1; i >= 0; i--) { // runs infinitly if you start from zero cuz new Branch are created
      if (!tree[i].finished) {
        let child = tree[i].addBranches();
        tree.push(child[0]);
        tree.push(child[1]);
        //tree.push(child[2]);
        tree[i].finished = true;
      }
    }
  }
}



function draw() {
  background(40);
  stroke('rgb(177, 123, 246)');
  tree[0].show();
  for (let i = 1; i<tree.length; i++) {
    stroke('rgb(54,223,255)');
    tree[i].show();
  }
  if (tree.length >= MAX) {
    let s = "Max size of the tree reached !\njust before your computer would crash ;)"
    text(s, width / 2, height * 0.2);
  }
}


