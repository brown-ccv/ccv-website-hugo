// zdog-demo.js
// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-svg',
  dragRotate: true,
  zoom: 2,
  translate: {x: 60},
  rotate: { x: Zdog.TAU/6, z: -Zdog.TAU/8 },
  // stop rotation when dragging starts
  onDragStart: function() {
    isSpinning = false;
  },
});


let box = new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 50,
  depth: 50,
  stroke: false,
  color: '#00B398', // default face color
  leftFace: '#3b444c',
  rightFace: '#F2CF8D',
  topFace: '#CCC6B8',
  bottomFace: '#222238',
  translate: {x: -110},
});

// copy
box.copy({
  // overwrite original options
  translate: { x: -55, y: 55 },
});
box.copy({
  // overwrite original options
  translate: { x: -55, y: -55},
});
box.copy({
  // overwrite original options
  translate: { x: 0, y: -55},
});
box.copy({
  // overwrite original options
  translate: { x: 0, y: 55},
});

// C2
box.copy({
  // overwrite original options
  translate: { x: -110, y: -55 },
  color: '#f2b91b'
});
box.copy({
  // overwrite original options
  translate: { x: -165, y: 55 },
  color: '#f2b91b'
});
box.copy({
  // overwrite original options
  translate: { x: -165, y: -55 },
  color: '#f2b91b'
});
box.copy({
  // overwrite original options
  translate: { x: -110, y: 55 },
  color: '#f2b91b'
});
box.copy({
  // overwrite original options
  translate: { x: -220 },
  color: '#f2b91b'
});
//  V
box.copy({
  // overwrite original options
  translate: { x: 110, y: 55 },
  color: '#f2b91b'
});
box.copy({
  // overwrite original options
  translate: { x: 55, y: 0 },
  color: '#f2b91b'
});
box.copy({
  // overwrite original options
  translate: { x: 55, y: -55 },
  color: '#f2b91b'
});
box.copy({
  // overwrite original options
  translate: { x: 165, y: 0 },
  color: '#f2b91b'
});
box.copy({
  // overwrite original options
  translate: { x: 165, y: -55 },
  color: '#f2b91b'
});
// update & render
// illo.updateRenderGraph();

let isSpinning = true;

function animate() {
  // if (isSpinning) {
  //   illo.rotate.z += 0.003;
  // }
  // rotate illo each frame
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();
