<!-- https://youtu.be/K5vX6eFfCBw -->
<div id="sun" />

<style lang="scss">
    #sun {
        transition: all 0.5s ease;
        z-index: -1;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        top: 0;
        height: 300px;
        width: 300px;
        margin-left: auto; 
        margin-right: auto;
        background-color: #ff5000;
        border-radius: 100%;
        animation-name: glow;
        box-shadow: 0 0 0 0 #ffa50040;
        animation: pulsing 3s infinite linear;
        animation-delay: 1s;
        opacity: 0.5;
    }

    #sun::before, #sun::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 100%;
        animation: inherit;
        animation-delay: -0.5s;
    }

    @keyframes pulsing {
        33% {
            box-shadow: 0 0 0 150px #96250f;
        }
        66% {
            box-shadow: 0 0 0 300px #ffb600;
        }
        100% {
            box-shadow: 0 0 0 450px transparent;
        }
    }

</style>
