(() => {
    // Create the control container
    const controls = document.createElement("div");

    controls.style.cssText = `
        position: fixed;
        right: -75px;
        top: 50%;
        transform: translateY(-50%);
        width: 105px;
        height: 82px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 5px;
        background: rgba(25, 25, 25, 0.9);
        border: 2px solid rgba(255,255,255,0.35);
        border-radius: 22px;
        transition: right 0.2s ease;
        z-index: 999999;
        font-family: Arial, sans-serif;
    `;

    // Create a button
    function createButton(icon, text) {
        const button = document.createElement("button");

        button.style.cssText = `
            position: relative;
            width: 45px;
            height: 68px;
            border: 0;
            border-radius: 17px;
            background: #f4f4f4;
            color: #111;
            font-size: 27px;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        button.innerHTML = `
            ${icon}
            <span style="
                position: absolute;
                right: 58px;
                top: 50%;
                transform: translateY(-50%);
                white-space: nowrap;
                background: rgba(20,20,20,.95);
                color: white;
                padding: 7px 10px;
                border-radius: 8px;
                font-size: 13px;
                font-weight: normal;
                opacity: 0;
                pointer-events: none;
                transition: opacity .15s;
            ">${text}</span>
        `;

        const tooltip = button.querySelector("span");

        button.addEventListener("mouseenter", () => {
            tooltip.style.opacity = "1";
        });

        button.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
        });

        return button;
    }

    // Buttons
    const upButton = createButton("▲", "Move Up");

    const movementButton = createButton(
        "✥",
        "Movement"
    );

    controls.appendChild(upButton);
    controls.appendChild(movementButton);

    document.body.appendChild(controls);

    // Show partially
    function showPartial() {
        controls.style.right = "-55px";
    }

    // Show completely
    function showFull() {
        controls.style.right = "12px";
    }

    // Hide
    function hide() {
        controls.style.right = "-75px";
    }

    // Detect mouse approaching the right side
    document.addEventListener("mousemove", (event) => {
        const distanceFromRight =
            window.innerWidth - event.clientX;

        if (distanceFromRight <= 45) {
            showPartial();
        }
    });

    // When mouse reaches the visible part
    controls.addEventListener("mouseenter", () => {
        showFull();
    });

    // When mouse leaves
    controls.addEventListener("mouseleave", () => {
        hide();
    });

    // Example actions
    upButton.addEventListener("click", () => {
        console.log("Move Up");
    });

    movementButton.addEventListener("click", () => {
        console.log("Movement");
    });
})();