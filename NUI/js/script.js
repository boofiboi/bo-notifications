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

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Display a notification when the page loads
    showNotification('#0000FF','bo-notifications','bo-notifications has loaded succesfully.');
});

window.addEventListener('message', (event) => {
    if (event.data.type === 'warn') {
        showNotification("#ffff00", "WARNING", event.data.text)
        var audioPlayer = null;

        if (audioPlayer != null){
        audioPlayer.pause();
        }

        audioPlayer = new Howl({src: ["./sounds/" + event.data.sound]});
        audioPlayer.volume(0.3);
        audioPlayer.play();
    }
    if (event.data.type === 'error') {
        showNotification("#FF0000", "FAILURE", event.data.text)
        var audioPlayer = null;

        if (audioPlayer != null){
        audioPlayer.pause();
        }

        audioPlayer = new Howl({src: ["./sounds/" + event.data.sound]});
        audioPlayer.volume(0.3);
        audioPlayer.play();
    }
    if (event.data.type === 'info') {
        showNotification("#0000FF", "INFORMATION",event.data.text)
        var audioPlayer = null;

        if (audioPlayer != null){
        audioPlayer.pause();
        }

        audioPlayer = new Howl({src: ["./sounds/" + event.data.sound]});
        audioPlayer.volume(0.3);
        audioPlayer.play();
    }
    if (event.data.type === 'success') {
        showNotification("#00FF00", "SUCCESS",event.data.text)
        var audioPlayer = null;

        if (audioPlayer != null){
        audioPlayer.pause();
        }

        audioPlayer = new Howl({src: ["./sounds/" + event.data.sound]});
        audioPlayer.volume(0.3);
        audioPlayer.play();
    }
});
