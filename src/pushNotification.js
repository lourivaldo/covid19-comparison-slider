import firebase from 'firebase';

export const initializeFirebase = () => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBhTcVjOpB1cmbg3RvL1QdNBjFuR7HHJ1Q",
        authDomain: "covid-19-276522.firebaseapp.com",
        databaseURL: "https://covid-19-276522.firebaseio.com",
        projectId: "covid-19-276522",
        storageBucket: "covid-19-276522.appspot.com",
        messagingSenderId: "120302394612",
        appId: "1:120302394612:web:56dfc499b2491c26a9d2a1"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker.ready
    //         .then(registration => {
    //             firebase.messaging().useServiceWorker(registration);
    //         })
    //         .catch(error => {
    //             console.error(error.message);
    //         });
    //
    //
    //     const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    //
    //     navigator.serviceWorker
    //         .register(swUrl)
    //         .then((registration) => {
    //             firebase.messaging().useServiceWorker(registration);
    //         });
    // }

};

export const askForPermissionToReceiveNotifications = async () => {
    try {

        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
            console.log('Notification permission granted.');
            const messaging = firebase.messaging();
            const token = await messaging.getToken();
            console.log(`user firebase token: ${token}`);
        } else {
            console.log('Unable to get permission to notify.');
        }

    } catch (error) {
        console.error(error);
    }
}
