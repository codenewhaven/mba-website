var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(5,1,1);
var material = new THREE.MeshBasicMaterial({color: 0xFF7869});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 4;

var render = function () {
   requestAnimationFrame(render);

   cube.rotation.x += 0.900;
   cube.rotation.y += 0.900;

   renderer.render(scene, camera);
};
document.addEventListener( 'mousedown', onDocumentMouseDown, false );

function onDocumentMouseDown( event ) {

event.preventDefault();

cube.scale.x /= 2;
cube.scale.y /= 2;
}
render();
