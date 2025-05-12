const virtualPet = {
    name: "Fluffy",
    type: "Dragon",
    age: 1,
    happiness: 0,
    hunger: 0,

    evolve: function(){
        if(this.happiness > 40 && this.hunger < 20){
            this.type = "Fire Dragon";
            this.name = "Blaze";
        }
        else if(this.happiness < 30 && this.hunger > 50){
            this.type = "Ghost Dragon";
            this.name = "Shadow";
        }
        this.updateImage();
    },

    feed: function(amount){
        this.hunger -= amount;
        this.happiness += amount/2;
        this.updateStatus();
    },

    play: function(time){
        this.happiness += time;
        this.hunger += time/2;
        this.updateStatus();
    },

    passTime: function(){
        this.age += 1;
        this.happiness -= 10;
        this.hunger += 10;
        this.evolve();
        this.updateStatus();
    },

    updateStatus: function(){
        document.getElementById('petStatus').innerHTML = `
        <p><strong>Name:</strong> ${this.name}</p>
        <p><strong>Type:</strong> ${this.type}</p>
        <p><strong>Age:</strong> ${this.age}</p>
        <p><strong>Happiness:</strong> ${this.happiness}</p>
        <p><strong>Hunger:</strong> ${this.hunger}</p>
        `;
    },

    updateImage: function(){
        let imageUrl = '';
        if(this.type === "Fire Dragon"){
            imageUrl = 'images/fire.jpg';
        }else if(this.type === "Ghost Dragon"){
            imageUrl = 'images/ghost.png';
        }else{
            imageUrl = 'images/baby.jpg';
        }
        document.getElementById('petImage').innerHTML = `<img src="${imageUrl}" alt="${this.type}">`;
    }
};

function feedPet(){
    virtualPet.feed(20);
}

function playWithPet(){
    virtualPet.play(30);
}

function passTime(){
    virtualPet.passTime();
}

virtualPet.updateStatus();
virtualPet.updateImage();