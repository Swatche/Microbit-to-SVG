// ******************  3.0 ADD WINDOW ONLOAD TO ALLOW EMBEDDED SVG TO TARGET PROPERLY
window.onload = function() {
    let accelField = document.getElementById("accel")
    let textField = document.getElementById("myText")
    let resetField = document.getElementById("resetMessage")
    //! scene1
    let scene1 = document.getElementById('scene1SVG').contentDocument
    let scene1Container = document.getElementById('scene1SVG')

    let scene1Wrapper = scene1.getElementById("scene1Wrapper")
    let stickNeutral = scene1.getElementById('stick-neutral')
    let scene1AToContinue = scene1.getElementById("press-A-to-continue")
    let scene1moon = scene1.getElementById("moon")
    let stickSquat = scene1.getElementById("stick-squat")
    let scene1WeightOn = scene1.getElementById("weight-on")
    let scene1Want = scene1.getElementById("want")
    let scene1Weightless = scene1.getElementById("weightless")
    let scene1AtoContinue1 = scene1.getElementById("press-A-to-continue-1")

    //! scene2
    let scene2 = document.getElementById('scene2SVG').contentDocument
    let scene2Container = document.getElementById('scene2SVG')

    let scene2Wrapper = scene2.getElementById("scene2Wrapper")
    let cloud1 = scene2.getElementById("cloud-1")
    let cloud2 = scene2.getElementById("cloud-2")
    let cloud3 = scene2.getElementById("cloud-3")
    let cloud4 = scene2.getElementById("cloud-4")
    let cloud5 = scene2.getElementById("cloud-5")
    let scene2Bg = scene2.getElementById("bg")
    let scene2Rocket = scene2.getElementById("scene2-rocket")
    let scene2Fire = scene2.getElementById("scene2-fire")
    let rocketRod = scene2.getElementById("rocket-rod")
    let rocketStand = scene2.getElementById("rocket-stand")
    let rocketFloor = scene2.getElementById('rocket-floor')
    let scene2Text = scene2.getElementById("hold-b-to-charge")
    let scene2AToContinue = scene2.getElementById("press-A-to-continue-2")

    //! scene3
    let scene3 = document.getElementById('scene3SVG').contentDocument
    let scene3Container = document.getElementById('scene3SVG')

    let scene3Wrapper = scene3.getElementById("scene3Wrapper")
    let scene3Text = scene3.getElementById('collect-stars')
    let scene3MoonText = scene3.getElementById('grab-moon')
    let scene3Bg = scene3.getElementById("scene3Bg")
    let scene3Rocket = scene3.getElementById("scene3-rocket")
    let scene3Moon = scene3.getElementById("scene3-moon")
    let star1 = scene3.getElementById("star-1")
    let star2 = scene3.getElementById("star-2")
    let star3 = scene3.getElementById("star-3")
    let star4 = scene3.getElementById("star-4")
    let star5 = scene3.getElementById("star-5")
    let star6 = scene3.getElementById("star-6")
    let star7 = scene3.getElementById("star-7")
    let star8 = scene3.getElementById("star-8")
    let star9 = scene3.getElementById("star-9")
    let star10 = scene3.getElementById("star-10")
    let star11 = scene3.getElementById("star-11")
    let star12 = scene3.getElementById("star-12")
    let star13 = scene3.getElementById("star-13")
    let star14 = scene3.getElementById("star-14")
    let star15 = scene3.getElementById("star-15")
    let starT1 = scene3.getElementById("starT-1")
    let starT2 = scene3.getElementById("starT-2")
    let starT3 = scene3.getElementById("starT-3")
    let redPlanet = scene3.getElementById("red")
    let bluePlanet = scene3.getElementById("blue")
    let yellowPlanet = scene3.getElementById("yellow")
    let moonCollider = scene3.getElementById("collide-box")
    let rocketCollider = scene3.getElementById("rocket-collider")
    let starT1Collide = scene3.getElementById("starT-1-collide")
    let starT2Collide = scene3.getElementById("starT-2-collide")
    let starT3Collide = scene3.getElementById("starT-3-collide")

    //* star containers
    let starg1 = [star3, star6, star13]
    let starg2 = [star2, star11, star12]
    let starg3 = [star5, star8, star14]
    let starg4 = [star4, star7, star9]
    let starg5 = [star1, star10, star15]

    //! scene 4
    let scene4 = document.getElementById('scene4SVG').contentDocument
    let scene4Container = document.getElementById('scene4SVG')

    let scene4Wrapper = scene4.getElementById("scene4Wrapper")
    let scene4Bg = scene4.getElementById("scene4-bg")
    let moonSurface = scene4.getElementById("moon-surface")
    let scene4Rocket = scene4.getElementById("scene4-rocket")
    let astronaut = scene4.getElementById("astronaut")
    let umbilicalCord = scene4.getElementById("umbilical-cord")
    let earth = scene4.getElementById("earth")
    let star4_1 = scene4.getElementById("star4-1")
    let star4_2 = scene4.getElementById("star4-2")
    let star4_3 = scene4.getElementById("star4-3")
    let star4_4 = scene4.getElementById("star4-4")
    let star4_5 = scene4.getElementById("star4-5")
    let star4_6 = scene4.getElementById("star4-6")
    let star4_7 = scene4.getElementById("star4-7")
    let star4_8 = scene4.getElementById("star4-8")
    let star4_9 = scene4.getElementById("star4-9")
    let scene4Text = scene4.getElementById("a-to-reset")

    //* scene4 star containers
    let star4g1 = [star4_2, star4_8, star4_6]
    let star4g2 = [star4_3, star4_5, star4_1]
    let star4g3 = [star4_7, star4_9, star4_4]

    //! scene item containers
    let scene1Items = [scene1AtoContinue1, scene1moon, scene1WeightOn, stickSquat, scene1WeightOn, scene1Want, scene1Weightless]
    let scene2Items = [scene2Bg, rocketFloor, rocketStand, scene2AToContinue, scene2Text, cloud1, cloud2, cloud3, cloud4, cloud5, scene2Bg, scene2Rocket, scene2Fire, rocketRod]
    let scene3Items = [scene3MoonText, scene3Moon, scene3Text, scene3Bg, scene3Rocket, starg1, starg2, starg3, starg4, starg5, redPlanet, bluePlanet, yellowPlanet, starT1, starT2, starT3]
    let scene4Items = [scene4Text, scene4Bg, moonSurface, scene4Rocket, astronaut, umbilicalCord, earth, star4_1, star4_2, star4_3, star4_4, star4_5, star4_6, star4_7, star4_8, star4_9]
    
    gsap.set([scene1Items, scene4Items, accelField], {
        opacity: 0
    })

    gsap.set([scene2Container, scene3Container, scene4Container], {
        opacity: 0
    })

    // *** 1.1 Delcare new micro:bit object ***
    let microBit = new uBit();

    // ** 3.1 GET SEARCH BUTTON AND ADD EVENT LISTENER ****************
    let searchBtn = document.getElementById('searchButton');

    // ! collider logic
    let currentS1Collide = false
    let currentS2Collide = false
    let currentS3Collide = false
    let currentMoonCollide = false
    let S1Active = true
    let S2Active = true
    let S3Active = true
    console.log(`S1 Active: ${S1Active}`)
    console.log(`S2 Active: ${S2Active}`)
    console.log(`S3 Active: ${S3Active}`)
    let prevS1Collide = currentS1Collide 
    let prevS2Collide = currentS2Collide 
    let prevS3Collide = currentS3Collide 
    let prevMoonCollide = currentMoonCollide 
    let starCount = 0
    
    //overlap calc
    function intersect (r1,r2){
        r1 = r1.getBoundingClientRect()
        r2 = r2.getBoundingClientRect()

        //check if boxes overlap
        return !(r2.left > r1.right ||
                r2.right < r1.left ||
                r2.top > r1.bottom ||
                r2.bottom < r1.top)
    }
    
    // ! set up viewbox dimension variables
    let svgWidth = 1200;
    let svgHeight = 800;

    // ! dimensions of item in SVG
    let rocketWidth = 196.3743
    let rocketHeight = 303.1638

    gsap.set([scene1Weightless, scene2Fire, scene2Rocket, 
            scene3Rocket, moonCollider, rocketCollider, scene3Items,
            scene3Moon, scene4Items], {
        transformOrigin: "center center"
    })

    // ** 2.1 Declare a variable to hold the count
    let buttonACurrentCount = 0
    let buttonBCurrentCount = 0;
    let currentScene = 1

    // **************** 4.0 Declare Accelerometer values
    let ax;
    let ay;
    let az;

    // * Declare variables for our HTML UI fields
    let axField = document.getElementById("accX");
    let ayField = document.getElementById("accY");
    let azField = document.getElementById("accZ");

    searchBtn.addEventListener('click', searchDevice);

    // *** 1.2 Declare a function and search for the Micro:bit ***
    function searchDevice(){
        microBit.searchDevice();
    }

    // *** 1.3 Check if micro:bit successfully connected ***
    microBit.onConnect(function() {
        console.log("I am connected to the universe! :D");
        gsap.to(searchBtn, {
            color: "#00CE00"
        })
    });
    microBit.onDisconnect(function(){
        console.log("Disconnected");
        gsap.to(searchBtn, {
            color: "white"
        })
    })

    // ** 1.4 GetButton data that updates with every frame
    microBit.onBleNotify(function() {
        // console.log(microbit.getButtonA());
        // ** 1.4.1 Update button data to write to our HTML
        document.getElementById("buttonA").innerHTML = microBit.getButtonA();
        document.getElementById("buttonB").innerHTML = microBit.getButtonB();

        // ** 4.1 GET ACCELEROMETER DATA
        ax = microBit.getAccelerometer().x;
        ay = microBit.getAccelerometer().y;
        az = microBit.getAccelerometer().z;

        // ** 4.2 Add our accelerometer values to our HTML fields
        axField.innerHTML = ax;
        ayField.innerHTML = ay;
        azField.innerHTML = az;

        // ** 4.3 Map accelerometer data to our SVG

        gsap.to(scene3Rocket, {
            duration: 3,
            //! map acc range to width of svg
            x: scale(ax, -1024, 1024, (-svgWidth)+rocketWidth, svgWidth-rocketWidth),
            y: scale(ay, -1024, 1024, (-svgHeight)+rocketHeight, svgHeight-rocketHeight),
            ease: Power3.easeOut
        });

        currentMoonCollide = intersect (rocketCollider, moonCollider)
        currentS1Collide = intersect (rocketCollider, starT1Collide)
        currentS2Collide = intersect (rocketCollider, starT2Collide)
        currentS3Collide = intersect (rocketCollider, starT3Collide)

        // if(starCount == 1 || starCount == 2 || starCount == 0){
        if(starCount<3 && currentScene === 3){
            if (S1Active === true && currentS1Collide === true && prevS1Collide === false){
                console.log(starCount)
                S1Active = false
                console.log(`S1 Active: ${S1Active}`)
                starCount++
                gsap.to(starT1, {
                    opacity: 0
                })
            }
            if (S2Active === true && currentS2Collide === true && prevS2Collide === false){
                console.log(starCount)
                S2Active = false
                console.log(`S2 Active: ${S2Active}`)
                starCount++
                gsap.to(starT2, {
                    opacity: 0
                })
            }
            if (S3Active === true && currentS3Collide === true && prevS3Collide === false){
                console.log(starCount)
                S3Active = false
                console.log(`S3 Active: ${S3Active}`)
                starCount++
                gsap.to(starT3, {
                    opacity: 0
                })
            }
            
            prevS1Collide = currentS1Collide
            prevS2Collide = currentS2Collide
            prevS3Collide = currentS3Collide
        } else {
            console.log("star disabled")
        }

        if(currentScene === 3 && starCount === 3){
            gsap.to([scene3Moon, scene3MoonText], {
                opacity: 1
            })
            gsap.to(scene3Text, {
                opacity: 0
            })
        }
        if (currentMoonCollide === true && prevMoonCollide === false){
            scene4Do()
        }

        prevMoonCollide = currentMoonCollide
    });

    // ! create scaling function: takes input variable, maps the min and max input values to a new range
    // ! useful for converting acc range to size of viewbox
    //number = variable for incoming data
    //inMin = lowest incoming value
    //inMax = highest
    //outMin = lower value after converting to new range (ie viewbox)
    //outMax = highest 
    function scale(number, inMin, inMax, outMin, outMax){
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
    }

    // ** 1.5 Only calls function once when Button A is pressed. 
    microBit.setButtonACallback(function() {
        console.log("Button A is Pressed!");
        currentButtonACount()
    });

    // ** 1.5.2
    microBit.setButtonBCallback(function() {
        console.log("Button B is Pressed!");
        currentButtonBCount();
    });

    function currentButtonACount(){
        buttonACurrentCount++
        // console.log(buttonACurrentCount);

        if(buttonACurrentCount === 5){
            buttonACurrentCount = 0
        }
        
        switch(buttonACurrentCount){
            case 0:
                resetField.textContent = ""
                gsap.to([scene1Container, scene1AToContinue, stickNeutral], {
                    opacity: 1
                })
                writeText("")
                break;
            case 1:
                changeScene(1)
                scene1Do();
                break;
            case 2:
                changeScene(2)
                scene2Do();
                break;
            case 3:
                changeScene(3)
                scene3Do();
                writeText("")
                break;
            // case 4:
            //     changeScene(4)
            //     scene4Do();
            //     break;
            case 4:
                resetField.textContent = "Press A to play again!"
                starCount = 0
                buttonBCurrentCount = 0
                S1Active = true
                S2Active = true
                S3Active = true
                console.log(buttonBCurrentCount)
                reset();
                break;
            default:
                break;
        }
    }

    // ** 2.2 Create a function to keep the current count of button presses
    function currentButtonBCount() {
        if (currentScene != 2 || buttonBCurrentCount === 36){
            console.log("B disabled")
        } else {
            buttonBCurrentCount++;
            console.log(buttonBCurrentCount);
        }

        // ** 2.4 Reset count if it exceeds a maximum
        switch(buttonBCurrentCount) {
            case 3:
                gsap.to(cloud1, {
                    autoAlpha: 1,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5
                })
                break;
            case 8:
                gsap.to(cloud3, {
                    autoAlpha: 1,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5
                })
                break;
            case 14:
                gsap.to(cloud5, {
                    autoAlpha: 1,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5
                })
                break;
            case 21:
                gsap.to(cloud2, {
                    autoAlpha: 1,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5
                })
                break;
            case 28:
                gsap.to(cloud4, {
                    autoAlpha: 1,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5
                })
                break;
            case 35:
                gsap.killTweensOf(cloud1);
                gsap.killTweensOf(cloud3);
                gsap.killTweensOf(cloud5);
                gsap.killTweensOf(cloud2);
                gsap.killTweensOf(cloud4);
                gsap.to([cloud1, cloud2, cloud3, cloud4, cloud5, scene2Text], {
                    opacity: 0
                })
                writeText("BLAST OFF!")
                let rocketLaunch = gsap.timeline({duration: 1})
                rocketLaunch.to(scene2Fire, {
                    opacity: 1,
                    scale: 1.1,
                    yoyo: true,
                    repeat: -1
                })
                rocketLaunch.to(rocketRod, {
                    opacity: 0
                })
                rocketLaunch.to([scene2Fire, scene2Rocket], {
                    y: -1100,
                    duration: 3,
                    delay: 1.3
                })
                rocketLaunch.to(scene2AToContinue, {
                    opacity: 1
                })
                break;
            default:
                break;
        }
    }

    function writeText (text){
        microBit.writeMatrixText(text);
        textField.innerText = text
    }

    function changeScene(num){
        currentScene = num
        console.log(`currentScene: ${currentScene}`)
    }

    function scene1Do(){
        gsap.set(scene1moon,{
            y: -550,
            opacity: 1
        })
        gsap.set(scene1WeightOn,{
            x: 770, 
            opacity: 1
        })
        let scene1Start = gsap.timeline({duration: 1})
        scene1Start.to(scene1AToContinue, {
            opacity: 0,
        })
        scene1Start.to(scene1moon, {
            y:0,
            ease: "linear",
            delay: 1.2
        })
        scene1Start.to(stickNeutral, {
            opacity: 0
        })
        scene1Start.to(stickSquat, {
            opacity: 1
        })
        scene1Start.to(scene1WeightOn,{
            x: 20,
            duration: 1.5,
            delay: 1.2
        })
        scene1Start.to([scene1moon, stickSquat, scene1WeightOn],{
            opacity: 0,
            delay: 2,
            duration: 1.8
        })
        scene1Start.to(scene1Want, {
            opacity: 1,
            duration: 0.9,
            delay: 2.1
        })
        scene1Start.to(scene1Weightless, {
            opacity: 1,
            duration: 0.9,
            delay: 2.2,
            scale: 1.1,
            yoyo: true,
            repeat: -1
        })
        scene1Start.to(scene1AtoContinue1, {
            duration: 0.9,
            delay: 2.25,
            opacity: 1
        })
    }

    function scene2Do(){
        let scene2Start = gsap.timeline({duration: 1})
        scene2Start.to(scene1Container, {
            opacity: 0,
        })
        scene2Start.to([scene2Container, scene2Bg], {
            opacity: 1,
            delay: 1.5,
            duration: 2
        })
        scene2Start.to(rocketFloor, {
            opacity: 1,
            duration: 1
        })
        scene2Start.to(rocketStand, {
            opacity: 1,
            duration: 1
        })
        scene2Start.to(rocketRod, {
            opacity: 1,
            duration: 1
        })
        scene2Start.to(scene2Rocket, {
            opacity: 1,
            duration: 1
        })
        scene2Start.to(scene2Text, {
            opacity: 1,
        })
    }

    function scene3Do(){
        gsap.to([starT1, starT3], {
            rotate: -360,
            yoyo: true,
            repeat: -1,
            duration: 2
        })
        gsap.to([starT2], {
            rotate: 360,
            yoyo: true,
            repeat: -1,
            duration: 2
        })
        starg1.forEach(star => {
            gsap.to(star, {
                rotate: 360,
                repeat: -1,
                duration: 3,
                ease: "linear"
            })
        })
        starg2.forEach(star => {
            let starg2Move = gsap.timeline({duration: 0.5, repeat: -1, yoyo: true, ease: "linear"})
            starg2Move.to(star, {
                translateY: 542,
                translateX: -789,
                duration: 2
            })
            starg2Move.to(star, {
                translateY: 256,
                translateX: -431,
                duration: 2
            })
            starg2Move.to(star, {
                translateY: -672,
                translateX: 915,
                duration: 2
            })
            starg2Move.to(star, {
                translateY: 78,
                translateX: -849,
                duration: 2
            })
        })
        starg3.forEach(star => {
            let starg3Move = gsap.timeline({duration: 0.5, repeat: -1, yoyo: true, ease: "linear"})
            starg3Move.to(star, {
                translateY: -50,
                translateX: -100,
                duration: 2
            })
            starg3Move.to(star, {
                translateX: -100,
                translateY: -50,
                duration: 2
            })
            starg3Move.to(star, {
                translateY: -200,
                translateX: 500,
                duration: 2
            })
            starg3Move.to(star, {
                translateX: -500,
                translateY: 200,
                duration: 2
            })
        })
        starg5.forEach(star => {
            let starg5Move = gsap.timeline({duration: 0.5, repeat: -1, yoyo: true, ease: "linear"})
            starg5Move.to(star, {
                translateY: 1000,
                translateX:1000,
                duration: 2
            })
            starg5Move.to(star, {
                translateY: -500,
                translateX: -200,
                duration: 2
            })
            starg5Move.to(star, {
                translateY: 1500,
                translateX: -600,
                duration: 2
            })
            starg5Move.to(star, {
                translateY: 1500,
                translateX: -600,
                duration: 2
            })
        })
        gsap.to(yellowPlanet, {
            rotate: 360,
            repeat: -1,
            ease: "linear",
            duration: 4
        })
        let blueMove = gsap.timeline({repeat: -1, yoyo: true, ease: "linear"})
        blueMove.to(bluePlanet, {
            translateX: 12,
            translateY: -28,
            duration: 2
        })
        blueMove.to(bluePlanet, {
            translateX: 45,
            translateY: -5,
            duration: 2
        })
        blueMove.to(bluePlanet, {
            translateX: 33,
            translateY: -48,
            duration: 2
        })
        blueMove.to(bluePlanet, {
            translateX: 20,
            translateY: -37,
            duration: 2
        })
        let redMove = gsap.timeline({repeat: -1, yoyo: true, ease: "linear"})
        redMove.to(redPlanet, {
            translateX: -14,
            translateY: 30,
            duration: 2
        })
        redMove.to(redPlanet, {
            translateX: -22,
            translateY: 7,
            duration: 2
        })
        redMove.to(redPlanet, {
            translateX: 18,
            translateY: -40,
            duration: 2
        })
        redMove.to(redPlanet, {
            translateX: 27,
            translateY: -3,
            duration: 2
        })
        gsap.to(scene3Moon, {
            scale: 1.2,
            yoyo: true,
            repeat: -1,
            duration: 2
        })
        let scene3Start = gsap.timeline({duration: 1})
        scene3Start.to(scene2Container, {
            opacity: 0,
        })
        scene3Start.to([scene3Container, accelField, scene3Bg], {
            opacity: 1,
            delay: 1.3,
            duration: 2
        })
        scene3Start.to(starg1, {
            opacity:1,
            duration:0.8
        })
        scene3Start.to([starg2, redPlanet, starT1], {
            opacity:1,
            duration:0.8
        })
        scene3Start.to([starg3, bluePlanet], {
            opacity:1,
            duration:0.8
        })
        scene3Start.to([starg4, starT2], {
            opacity:1,
            duration:0.8
        })
        scene3Start.to([starg5, yellowPlanet, starT3], {
            opacity:1,
            duration:0.8
        })
        scene3Start.to([scene3Rocket, scene3Text], {
            opacity: 1,
            duration: 0.8
        })
    }

    function scene4Do(){
        changeScene(4)
        gsap.set([astronaut, umbilicalCord], {
            y: 150,
        })
        // gsap.to([scene1Wrapper, scene2Wrapper, scene2Bg, scene3Wrapper], {
        //     opacity: 0
        // })
        gsap.to([scene3Container, scene2Container, scene1Container], {
            opacity:0
        })
        gsap.to([scene4Container], {
            opacity: 1
        })
        gsap.to([astronaut, umbilicalCord], {
            translateY: -35,
            repeat: -1,
            yoyo: true,
            duration: 4,
            ease: "sine.inOut"
        })
        gsap.to(earth, {
            rotate: 360,
            repeat: -1,
            ease: "linear",
            duration: 8
        })
        star4g1.forEach(star=>{
            gsap.to(star, {
                scale: 1.2,
                rotate: 180,
                yoyo: true,
                repeat: -1,
                duration: 1.5
            })
        })
        star4g2.forEach(star=>{
            gsap.to(star, {
                scale: 0.85,
                yoyo: true,
                repeat: -1,
                duration: 2
            })
        })
        star4g3.forEach(star=>{
            gsap.to(star, {
                scale: 2,
                rotate: 360,
                repeat: -1,
                ease: "linear",
                duration: 5,
                yoyo: "true"
            })
        })
        let scene4Start = gsap.timeline({duration: 1})
        scene4Start.to(scene4Bg, {
            opacity:1
        })
        scene4Start.to(star4g1, {
            opacity:1
        })
        scene4Start.to([star4g2, earth], {
            opacity:1,
            duration: 1.2
        })
        scene4Start.to([star4g3, moonSurface], {
            opacity:1,
            duration: 1.2
        })
        scene4Start.to(scene4Rocket, {
            opacity:1,
            duration: 1.2
        })
        scene4Start.to([astronaut, umbilicalCord], {
            opacity:1
        })
        scene4Start.to(scene4Text, {
            opacity: 1,
            delay: 2
        })
        writeText("TO THE MOON!!")
    }

    function reset(){
        gsap.to([scene4Container, accelField], {
            opacity: 0
        })
        scene1Items.forEach(item=>{
            gsap.killTweensOf(item)
            gsap.to(item, {
                opacity: 0
            })
        })
        scene2Items.forEach(item=>{
            gsap.killTweensOf(item)
            gsap.to(item, {
                opacity: 0
            })
        })
        scene3Items.forEach(item=>{
            gsap.killTweensOf(item)
            gsap.to(item, {
                opacity: 0
            })
        })
        scene4Items.forEach(item=>{
            gsap.killTweensOf(item)
            gsap.to(item, {
                opacity: 0
            })
        })
    }



} //* onload bracket don't delete