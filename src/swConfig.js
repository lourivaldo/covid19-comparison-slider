export default {
    onUpdate: registration => {
        console.log('onUpdate')
        const waitingServiceWorker = registration.waiting;

        if (waitingServiceWorker) {
            waitingServiceWorker.addEventListener("statechange", event => {
                if (event.target.state === "activated") {
                    window.location.reload()
                }
            });
            console.log('SKIP_WAITING')
            waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
        }
    },
    onSuccess: registration => {
        console.log('onSuccess')
        console.info('service worker on success state')
        console.log(registration)
    },
}
