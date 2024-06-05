var photoSrcs = [
    './images/p1.jpeg', './images/p2.jpeg', './images/p3.jpeg', './images/p4.jpeg', './images/p5.jpeg',
    './images/p6.jpeg', './images/p7.jpeg', './images/p8.jpeg', './images/p9.jpeg', './images/p10.jpeg' 
];

var captions = [
'Adorable Puppy', 'Golden Retriever by the Pool', 'Golden Retriever', 'Dachshunds Resting', 'Curious Puppy',
'Orange Tabby Cat', 'Striped Cat', 'Kitten with Flowers', 'Gray Cat', 'Cat with Red Flower'
];

var descriptions = [
'A tiny black and tan puppy sitting on a light-colored floor, looking adorable.', 'A golden retriever walking happily next to a pool, enjoying the sunny day.', 
'A cheerful golden retriever sitting indoors, looking directly at the camera.', 'Two dachshunds relaxing on a couch, one sitting up and the other lying down.', 
'A gray puppy with blue eyes looking curiously at the camera in a dimly lit room.', 'An orange tabby cat sitting on a windowsill, looking outside with interest.', 
'A striped cat with striking green eyes staring intensely at the camera.', 'A fluffy white kitten being held, adorned with a floral collar.', 
'A gray cat sitting on grass, with sunlight illuminating its fur.', 'A long-haired cat with a red flower by its side, looking pensively into the distance.'
];


document.addEventListener('DOMContentLoaded', function() {
    var gallery = document.getElementById('gallery');
    var infoBox = document.createElement('div');
    infoBox.className = 'info-box';
    infoBox.style.display = 'none'; // initially hidden
    document.body.appendChild(infoBox);

    photoSrcs.forEach(function(src, index) {
        var listItem = document.createElement('li');
        listItem.className = 'photo';

        var img = document.createElement('img');
        img.src = src;
        img.alt = captions[index];

        var caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = captions[index];

        var description = document.createElement('div');
        description.className = 'description';
        description.textContent = descriptions[index];

        listItem.appendChild(img);
        listItem.appendChild(caption);
        listItem.appendChild(description);
        gallery.appendChild(listItem);

        listItem.addEventListener('click', function() {
            infoBox.innerHTML = '<h2>' + captions[index] + '</h2><p>' + descriptions[index] + '</p><button onclick="closeInfoBox()">Close</button>';
            infoBox.style.display = 'block';
        });
    });

    window.closeInfoBox = function() {
        infoBox.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var contactChoice = document.getElementById('contactChoice');
    var emailContainer = document.getElementById('emailContainer');
    var phoneContainer = document.getElementById('phoneContainer');

    contactChoice.addEventListener('change', function() {
        if (contactChoice.value === "Email") {
            emailContainer.style.display = 'block';
            phoneContainer.style.display = 'none';
        } else if (contactChoice.value === "Phone") {
            emailContainer.style.display = 'none';
            phoneContainer.style.display = 'block';
        } else {
            emailContainer.style.display = 'none';
            phoneContainer.style.display = 'none';
        }
    });
});


