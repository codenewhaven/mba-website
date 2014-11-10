var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
document.addEventListener( 'mousedown', onDocumentMouseDown, false );

function onDocumentMouseDown( event ) {
event.preventDefault();

cube.scale.x *= 2;
cube.scale.y *= 2;
}
var render = function () {
   requestAnimationFrame(render);

   cube.rotation.x += .01;
   cube.rotation.y += .01;

   renderer.render(scene, camera);
};

render();
