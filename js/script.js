// ******************  3.0 ADD WINDOW ONLOAD TO ALLOW EMBEDDED SVG TO TARGET PROPERLY
window.onload = function() {
    //! scene1
    let scene1 = document.getElementById('scene1SVG').contentDocument

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

    let scene3Wrapper = scene3.getElementById("scene3Wrapper")
    let scene3Rocket = scene3.getElementById("scene3-rocket")
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
    let redPlanet = scene3.getElementById("red")
    let bluePlanet = scene3.getElementById("blue")
    let yellowPlanet = scene3.getElementById("yellow")

    //* star containers
    let starg1 = [star3, star6, star13]
    let starg2 = [star2, star11, star12]
    let starg3 = [star5, star8, star14]
    let starg4 = [star4, star7, star9]
    let starg5 = [star1, star10, star15]

    //! scene item containers
    let scene1Items = [stickNeutral, scene1AToContinue, scene1moon, stickSquat, scene1WeightOn, scene1Want, scene1Weightless]
    let scene2Items = [cloud1, cloud2, cloud3, cloud4, cloud5, scene2Bg, scene2Rocket, scene2Fire, rocketRod]

    // *** 1.1 Delcare new micro:bit object ***
    let microBit = new uBit();

    // ** 3.1 GET SEARCH BUTTON AND ADD EVENT LISTENER ****************
    let searchBtn = document.getElementById('searchButton');

    // ! set up viewbox dimension variables
    let svgWidth = 1100;
    let svgHeight = 600;

    // ! dimensions of item in SVG
    let rocketWidth = 196.3743
    let rocketHeight = 303.1638

    gsap.set([scene1Weightless, scene2Fire, scene2Rocket, scene3Rocket], {
        transformOrigin: "center center"
    })

    // ** 2.1 Declare a variable to hold the count
    let buttonACurrentCount = 0
    let buttonBCurrentCount = 0;

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
    });

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

    // gsap.set(scene3Rocket,{
    //     x: -964.1872,
    //     y: -563.1428
    // })

    //!!!!!!!! SCENE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    gsap.set(scene1moon,{
        y: -550
    })
    gsap.set(scene1WeightOn,{
        x: 770
    })

    gsap.set([scene2Wrapper, scene3Wrapper], {
        opacity: 0
    })

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
        console.log(buttonACurrentCount);
        
        switch(buttonACurrentCount){
            case 1:
                scene1Do();
                break;
            case 2:
                scene2Do();
                break;
            case 3:
                scene3Do();
                break;
            default:
                break;
        }
    }

    // ** 2.2 Create a function to keep the current count of button presses
    function currentButtonBCount() {
        buttonBCurrentCount++;
        console.log(buttonBCurrentCount);

        if (buttonBCurrentCount === 21) {
            return;
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
            case 6:
                gsap.to(cloud3, {
                    autoAlpha: 1,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5
                })
                break;
            case 9:
                gsap.to(cloud5, {
                    autoAlpha: 1,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5
                })
                break;
            case 12:
                gsap.to(cloud2, {
                    autoAlpha: 1,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5
                })
                break;
            case 15:
                gsap.to(cloud4, {
                    autoAlpha: 1,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5
                })
                break;
            case 20:
                gsap.killTweensOf(cloud1);
                gsap.killTweensOf(cloud3);
                gsap.killTweensOf(cloud5);
                gsap.killTweensOf(cloud2);
                gsap.killTweensOf(cloud4);
                gsap.to([cloud1, cloud2, cloud3, cloud4, cloud5, scene2Text], {
                    opacity: 0
                })
                writeText("BLAST OFF")
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
    }

    function scene1Do(){
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
            duration: 1,
            delay: 2.2
        })
        scene1Start.to(scene1Weightless, {
            opacity: 1,
            duration: 1,
            delay: 2.4,
            scale: 1.1,
            yoyo: true,
            repeat: -1
        })
        scene1Start.to(scene1AtoContinue1, {
            opacity: 1
        })
    }

    function scene2Do(){
        let scene2Start = gsap.timeline({duration: 1})
        scene2Start.to(scene1Wrapper, {
            opacity: 0,
        })
        scene2Start.to(scene2Wrapper, {
            opacity: 1,
            delay: 2,
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
            opacity: 1
        })
    }

    function scene3Do(){
        let scene3Start = gsap.timeline({duration: 1})
        scene3Start.to(scene2Wrapper, {
            opacity: 0,
        })
        scene3Start.to(scene3Wrapper, {
            opacity: 1,
            delay: 1.3,
            duration: 2
        })
        scene3Start.to(starg1, {
            opacity:1,
            duration:0.8
        })
        scene3Start.to([starg2, redPlanet], {
            opacity:1,
            duration:0.8
        })
        scene3Start.to([starg3, bluePlanet], {
            opacity:1,
            duration:0.8
        })
        scene3Start.to(starg4, {
            opacity:1,
            duration:0.8
        })
        scene3Start.to([starg5, yellowPlanet], {
            opacity:1,
            duration:0.8
        })
        scene3Start.to(scene3Rocket, {
            opacity: 1,
            duration: 0.8
        })
    }




} //* onload bracket don't delete