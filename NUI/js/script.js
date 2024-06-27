// script.js
function showNotification(color, title, message) {
    // Create a new notification div
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style = "border: 1px solid" + color + ";"
    
    const h1 = document.createElement('h1');
    h1.textContent = title;
    notification.appendChild(h1);

    const hr = document.createElement('hr');
    hr.style = "color:" + color + ";"
    notification.appendChild(hr);

    const a = document.createElement('a');
    a.textContent = message;
    notification.appendChild(a);
    
    


    
    // Append the notification to the container
    const container = document.getElementById('notification-container');
    container.appendChild(notification);
    

    // Automatically remove the notification after 5 seconds
    setTimeout(() => {
        notification.classList.add('slide-out');
        notification.addEventListener('animationend', () => {
            container.removeChild(notification);
        });
    }, 5000);
}


window.addEventListener('message', (event) => {
    if (event.data.type === 'warn') {
        showNotification(event.data.color, "WARNING", event.data.text)
        var audioPlayer = null;

        if (audioPlayer != null){
        audioPlayer.pause();
        }

        audioPlayer = new Howl({src: ["./sounds/" + event.data.sound]});
        audioPlayer.volume(0.3);
        audioPlayer.play();
    }
    if (event.data.type === 'failure') {
        showNotification(event.data.color, "FAILURE", event.data.text)
        var audioPlayer = null;

        if (audioPlayer != null){
        audioPlayer.pause();
        }

        audioPlayer = new Howl({src: ["./sounds/" + event.data.sound]});
        audioPlayer.volume(0.3);
        audioPlayer.play();
    }
    if (event.data.type === 'info') {
        showNotification(event.data.color, "INFORMATION",event.data.text)
        var audioPlayer = null;

        if (audioPlayer != null){
        audioPlayer.pause();
        }

        audioPlayer = new Howl({src: ["./sounds/" + event.data.sound]});
        audioPlayer.volume(0.3);
        audioPlayer.play();
    }
    if (event.data.type === 'success') {
        showNotification(event.data.color, "SUCCESS",event.data.text)
        var audioPlayer = null;

        if (audioPlayer != null){
        audioPlayer.pause();
        }

        audioPlayer = new Howl({src: ["./sounds/" + event.data.sound]});
        audioPlayer.volume(0.3);
        audioPlayer.play();
    }
});
