<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edge Controls</title>

<style>
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #111;
    }

    /* The controls */
    #edge-controls {
        position: fixed;
        top: 50%;
        right: -76px;

        transform: translateY(-50%);

        width: 112px;
        height: 82px;

        display: flex;
        align-items: center;
        gap: 6px;

        padding: 5px;

        background: rgba(25, 25, 25, 0.94);
        border: 2px solid rgba(255,255,255,0.25);
        border-radius: 20px;

        transition:
            right 0.22s cubic-bezier(.2,.8,.2,1);

        z-index: 9999;
    }

    /* Half visible */
    #edge-controls.partial {
        right: -55px;
    }

    /* Fully visible */
    #edge-controls.full {
        right: 12px;
    }

    .control {
        position: relative;

        width: 47px;
        height: 68px;

        border: none;
        border-radius: 16px;

        background: #f5f5f5;
        color: #171717;

        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 27px;
        font-weight: bold;

        transition:
            transform 0.12s ease,
            background 0.12s ease;
    }

    .control:hover {
        background: white;
        transform: scale(1.04);
    }

    /* Tooltip */
    .tooltip {
        position: absolute;

        right: 57px;
        top: 50%;

        transform: translateY(-50%);

        padding: 7px 10px;

        background: rgba(15,15,15,.96);
        color: white;

        border-radius: 7px;

        font-family: Arial, sans-serif;
        font-size: 13px;
        font-weight: normal;

        white-space: nowrap;

        opacity: 0;
        pointer-events: none;

        transition: opacity .15s ease;
    }

    .control:hover .tooltip {
        opacity: 1;
    }

    /* Four-direction icon */
    .move-icon {
        width: 25px;
        height: 25px;

        position: relative;
    }

    .move-icon::before {
        content: "✦";

        position: absolute;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        font-size: 27px;
    }
</style>
</head>

<body>

<div id="edge-controls">

    <button class="control" id="up">
        ▲
        <span class="tooltip">Move Up</span>
    </button>

    <button class="control" id="movement">
        <span class="move-icon"></span>
        <span class="tooltip">Movement</span>
    </button>

</div>


<script>
    const controls = document.getElementById("edge-controls");

    let hideTimeout;

    /*
     * Mouse reaches the right side:
     * show the controls halfway.
     */
    document.addEventListener("mousemove", (event) => {

        const distanceFromRight =
            window.innerWidth - event.clientX;

        if (distanceFromRight <= 45) {
            clearTimeout(hideTimeout);

            controls.classList.remove("full");
            controls.classList.add("partial");
        }
    });


    /*
     * Mouse enters the visible controls:
     * show the entire UI.
     */
    controls.addEventListener("mouseenter", () => {

        clearTimeout(hideTimeout);

        controls.classList.remove("partial");
        controls.classList.add("full");
    });


    /*
     * Mouse leaves the controls:
     * hide them.
     */
    controls.addEventListener("mouseleave", () => {

        hideTimeout = setTimeout(() => {

            controls.classList.remove("partial");
            controls.classList.remove("full");

        }, 150);
    });


    /*
     * Button actions
     */
    document.getElementById("up").addEventListener("click", () => {
        console.log("Move Up");
    });


    document.getElementById("movement").addEventListener("click", () => {
        console.log("Movement");
    });
</script>

</body>
</html>