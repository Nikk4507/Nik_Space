import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



// Texture
// const image = new Image()
// const texture = new THREE.Texture(image)

// image.onload = () => {
//     texture.needsUpdate = true   
// }

// image.src = '/textures/door/color.jpg'

//Alternate Texture
const textureLoader = new THREE.TextureLoader()
const texture0 = textureLoader.load('/textures/Fur.jpg')
const texture1 = textureLoader.load('/textures/Stone.jpg')
const texture2 = textureLoader.load('/textures/Metal.jpg')
const texture3 = textureLoader.load('/textures/bedsheet.jpg')
const texture4 = textureLoader.load('/textures/bed.jpg')
const texture5 = textureLoader.load('/textures/bed_back.jpg')
const texture6 = textureLoader.load('/textures/portrait.jpg')
const texture7 = textureLoader.load('/textures/tex2.jpg')
const texture8 = textureLoader.load('/textures/Glass.jpg')
const texture9 = textureLoader.load('/textures/Nikhil/selfie2.jpg')
const texture10 = textureLoader.load('/textures/Nikhil/traditional.jpg')
const texture11 = textureLoader.load('/textures/fur2.png')
// const texture12 = textureLoader.load('/textures/tex.png')
// const texture = textureLoader.load('/textures/door/color.jpg')


texture0.generateMipmaps = false
texture0.minFilter = THREE.NearestFilter
texture1.minFilter = THREE.NearestFilter
// texture2.minFilter = THREE.NearestFilter
texture3.minFilter = THREE.NearestFilter
texture4.minFilter = THREE.NearestFilter
texture5.minFilter = THREE.NearestFilter
texture6.minFilter = THREE.NearestFilter
texture7.minFilter = THREE.NearestFilter
texture8.minFilter = THREE.NearestFilter
texture9.minFilter = THREE.NearestFilter
texture10.minFilter = THREE.NearestFilter

// texture.magFilter = THREE.NearestFilter



const parameters = {
    // color: 'yellow',
    spin: () => {
        gsap.to(mesh.rotation, {duration: 1, y: mesh.rotation.y + Math.PI * 2})
    }
}

// gui
//     .add(parameters, 'spin')

// gui
//     .addColor(parameters, 'color')
//     .onChange(() =>{
//         material.color.set(parameters.color)
//     })



const cursor ={
    x:0,
    y:0
}

window.addEventListener('mousemove',(event) => {
    cursor.x = -(event.clientX / sizes.width - 0.5)
    cursor.y = event.clientY / sizes.height - 0.5
    
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const group = new THREE.Group()
scene.add(group)

/**
 * Object
 */

const plane1 = new THREE.Mesh(
    new THREE.BoxGeometry(5.1,0.1,5),
    new THREE.MeshBasicMaterial({ map: texture1 })
)

group.add(plane1)

const plane2 = new THREE.Mesh(
    new THREE.BoxGeometry(5.1,0.1,5),
    new THREE.MeshBasicMaterial({ map: texture0 })
)
plane2.position.y = 5

group.add(plane2)

const plane3 = new THREE.Mesh(
    new THREE.BoxGeometry(5.1,0.1,5),
    new THREE.MeshBasicMaterial({ map: texture0 })
)
plane3.rotation.z = 11
plane3.position.x= -2.55
plane3.position.y= 2.5


group.add(plane3)

const plane4 = new THREE.Mesh(
    new THREE.BoxGeometry(5.1,0.1,5),
    new THREE.MeshBasicMaterial({ map: texture0 })
)
plane4.rotation.z = 11
plane4.position.x= 2.55
plane4.position.y= 2.5


group.add(plane4)

const plane5 = new THREE.Mesh(
    new THREE.BoxGeometry(5.1,0.1,5),
    new THREE.MeshBasicMaterial({ 
        // color: 'D0D4CA',
        map: texture0
    })
)

plane5.rotation.z = 11
plane5.rotation.y = 11
plane5.position.y= 2.45
plane5.position.z = -2.48

group.add(plane5)


const capsule1 = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.05,0.15,1,10),
    new THREE.MeshBasicMaterial({
        // color: 'grey'
        map: texture2
    })
)
capsule1.position.y= 4.8

group.add(capsule1)

const circle1 = new THREE.Mesh(
    new THREE.TorusGeometry(0.1,0.1),
    new THREE.MeshBasicMaterial({
        // color:'grey',
        map: texture2
    })
)
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)
circle1.position.y= 4.61

circle1.rotation.x= 8
// circle1.rotation.y= 0

group.add(circle1)


const fanPlate1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.15,0.09,1.5),
    new THREE.MeshBasicMaterial({
        map: texture2
    })
)
fanPlate1.position.y = 4.59
fanPlate1.rotation.y = 2

group.add(fanPlate1)

const fanPlate2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.15,0.09,1.5),
    new THREE.MeshBasicMaterial({
        map: texture2
    })
)
fanPlate2.position.y = 4.59
fanPlate2.rotation.y = -2.5

group.add(fanPlate2)

// const fanPlate3 = new THREE.Mesh(
//     new THREE.BoxGeometry(0.15,0.09,1.5),
//     new THREE.MeshBasicMaterial({
//         map: texture2
//     })
// )
// fanPlate3.position.y = 4.59
// fanPlate3.rotation.y = -8

// group.add(fanPlate3)

const blanket = new THREE.Mesh(
    new THREE.BoxGeometry(2.4,0.01,3.9),
    new THREE.MeshBasicMaterial({
        // color: 'red'
        map: texture3
    })
)

blanket.position.y=0.5
blanket.position.x = -1.25
group.add(blanket)


const bed = new THREE.Mesh(
    new THREE.BoxGeometry(2.5,0.5,4),
    new THREE.MeshBasicMaterial({
        // color: 'red'
        map: texture4
    })
)
bed.position.y=0.25
bed.position.x = -1.25
group.add(bed)



const bedBack = new THREE.Mesh(
    new THREE.BoxGeometry(2.5,1.25,0.5),
    new THREE.MeshBasicMaterial({
        // color: 'grey'
        map: texture5
    })
)
bedBack.position.y = 0.6
bedBack.position.z = -2.25
bedBack.position.x = -1.25

group.add(bedBack)

const myImage = new THREE.Mesh(
    new THREE.BoxGeometry(2,2,0.1),
    new THREE.MeshBasicMaterial({
        // color: 'red'
        map: texture6
    })
)
myImage.rotation.y = 11
myImage.position.x = -2.5 
myImage.position.y = 2.5

group.add(myImage)

const myImage1 = new THREE.Mesh(
    new THREE.BoxGeometry(1.5,1.5,0.01),
    new THREE.MeshBasicMaterial({
        // color: 'red'
        map: texture10
    })
)
myImage1.rotation.y = 6.3
myImage1.position.x = 1.5 
myImage1.position.y = 3
myImage1.position.z = -2.3

group.add(myImage1)

const myImage2 = new THREE.Mesh(
    new THREE.BoxGeometry(1.5,1.5,0.01),
    new THREE.MeshBasicMaterial({
        // color: 'red'
        map: texture9
    })
)
myImage2.rotation.y = 6.3
myImage2.position.x = -1.5
myImage2.position.y = 3
myImage2.position.z = -2.3

group.add(myImage2)

const table = new THREE.Mesh(
    new THREE.BoxGeometry(1.5,0.1,3),
    new THREE.MeshBasicMaterial({
        // color: 'red'
        map: texture8
    })
)
table.position.x = 1.8
table.position.y = 1

group.add(table)

const dustBin = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25,0.125,0.5),
    new THREE.MeshBasicMaterial({
        // color: 'red'
        map: texture7
    })
)
dustBin.position.z = -2.15
dustBin.position.x = 2.25
dustBin.position.y = 0.22

group.add(dustBin)


const tableStand1 = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.05,0.95),
    new THREE.MeshBasicMaterial({
        map: texture7
    })
)
tableStand1.rotation.x = 0.5
tableStand1.position.y = 0.5
tableStand1.position.x = 2
tableStand1.position.z = -1.5

group.add(tableStand1)

const tableStand2 = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.05,0.95),
    new THREE.MeshBasicMaterial({
        map: texture7
    })
)
tableStand2.rotation.x = 0.5
tableStand2.position.y = 0.5
tableStand2.position.x = 1.5
tableStand2.position.z = -1.5

group.add(tableStand2)


const tableStand3 = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.05,0.95),
    new THREE.MeshBasicMaterial({
        map: texture7
    })
)
tableStand3.rotation.x = -0.5
tableStand3.position.y = 0.5
tableStand3.position.x = 1.5
tableStand3.position.z = 1.5

group.add(tableStand3)

const tableStand4 = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.05,0.95),
    new THREE.MeshBasicMaterial({
        map: texture7
    })
)
tableStand4.rotation.x = -0.5
tableStand4.position.y = 0.5
tableStand4.position.x = 2
tableStand4.position.z = 1.5

group.add(tableStand4)


const lightSwitch = new THREE.Mesh(
    new THREE.PlaneGeometry(0.35,0.35),
    new THREE.MeshBasicMaterial({
        map: texture11
    })
)

lightSwitch.rotation.y = -1.5
lightSwitch.rotation.x = 0.05
lightSwitch.position.y = 1.5
lightSwitch.position.x = 2.49

group.add(lightSwitch)

const lightSwitchButton = new THREE.Mesh(
    new THREE.BoxGeometry(0.1,0.15,0.1),
    new THREE.MeshBasicMaterial({
        map: texture8
    })
)

// lightSwitchButton.rotation.y = -1.5
lightSwitchButton.rotation.z = -0.35
lightSwitchButton.position.y = 1.5
lightSwitchButton.position.x = 2.50
lightSwitchButton.position.z = -0.02

group.add(lightSwitchButton)

const bulb = new THREE.Mesh(
    new THREE.ConeGeometry(0.1,0.25),
    new THREE.MeshBasicMaterial({
        color: 'grey'
    })
)

bulb.rotation.z = -11
bulb.position.y = 4
bulb.position.x = 2.35

group.add(bulb)

const sphereBulb = new THREE.Mesh(
    new THREE.SphereGeometry(0.1),
    new THREE.MeshBasicMaterial({
        color: 'white'
    })
)

// sphereBulb.rotation.z = -11
sphereBulb.position.y = 4
sphereBulb.position.x = 2.23

group.add(sphereBulb)


group.position.x=-0.5
group.position.y=-2
// const geometry = new THREE.BoxGeometry(5.1,0.1,5)
// const material = new THREE.MeshBasicMaterial({ map: texture })
// const mesh = new THREE.Mesh(geometry, material)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


window.addEventListener('dblclick' , ()=>{

    const fullScreen = document.fullscreenElement || document.webkitFullscreenElement

    if(!fullScreen){
        if(canvas.requestFullscreen){
            canvas.requestFullscreen()
        }else if(canvas.webkitFullscreenElement){
            canvas.webkitFullscreenElement()
        }
    }else{
        if(document.exitFullscreen){
            document.exitFullscreen()
        }else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen()
        }
    }
})



/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 10
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()