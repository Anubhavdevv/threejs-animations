import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { WireframeGeometry } from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bgr'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

//Creating a object of three.js
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
    color: 0xFF6347,  
    wireframe: true//wireframe use as lightning the object 
});
const torus = new THREE.Mesh(geometry, material);

//Adding the scene to the object
scene.add(torus);

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);

//Declaring Animation function to animate the object
function animate(){    //Recursive funtion to animate the object loop
    requestAnimationFrame(animate);
    
    torus.rotation.x += 0.03;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.05;
    renderer.render(scene, camera);
}

animate()

