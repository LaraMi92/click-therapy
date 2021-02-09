//initialising 
let scene, camera, renderer, square, square2;

function init(){
    //setting up scene
     scene = new THREE.Scene();
     const background = new THREE.TextureLoader().load( "textures/background.png" );
     scene.background = background;

     //perspective camera
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.4, 1000);
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    
    
    renderer.setSize(window.innerWidth, window.innerHeight * 0.4);
    
    //DOM
    const top = document.querySelector(".top");
    top.appendChild(renderer.domElement);
    
    //generating cube
    const geometry = new THREE.BoxGeometry(0.7,0.7,0.7);

    //adding textures
    const texture = new THREE.TextureLoader().load( "textures/gradient1.jpg" );

    const texture2 = new THREE.TextureLoader().load( "textures/gradient2.jpg" );

   const material = new THREE.MeshBasicMaterial({ map: texture});

   const material2 = new THREE.MeshBasicMaterial({ map: texture2});

    square = new THREE.Mesh(geometry, material);
    square2 = new THREE.Mesh(geometry, material2);
    
    //add to scene
    scene.add(square);
    scene.add(square2);

    
    camera.position.z = 3;
    
}

//animation
function animate() {
    requestAnimationFrame(animate);

    square.rotation.x += 0.01;
    square.rotation.y += 0.01;

    renderer.render(scene, camera);

}

//responsiveness
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.4);
}

window.addEventListener('resize', onWindowResize, false);

//launching
init();
animate();