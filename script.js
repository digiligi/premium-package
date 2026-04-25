const items = {
    espresso: {
        title: "Espresso",
        desc: "Jak i aromatičan espresso od premium zrna.",
        img: "images/espresso.jpg"
    },
    latte: {
        title: "Latte",
        desc: "Kremasti latte sa toplim mlijekom.",
        img: "images/latte.jpg"
    },
    capuccino: {
        title: "Cappuccino",
        desc: "Savršen balans kafe i mlijeka.",
        img: "images/cappuccino.jpg"
    },
    orange: {
        title: "Sok od narandže",
        desc: "Svježe cijeđeni sok.",
        img: "images/orange.jpg"
    },
    apple: {
        title: "Sok od jabuke",
        desc: "Prirodni sok od jabuke.",
        img: "images/apple.jpg"
    },
    cake: {
        title: "Chocolate Cake",
        desc: "Bogata čokoladna torta.",
        img: "images/cake.jpg"
    },
    cheesecake: {
        title: "Cheesecake",
        desc: "Kremasti cheesecake desert.",
        img: "images/cheesecake.jpg"
    }
};

function openItem(key) {
    const modal = document.getElementById("itemModal");

    document.getElementById("itemTitle").innerText = items[key].title;
    document.getElementById("itemDesc").innerText = items[key].desc;
    document.getElementById("itemImg").src = items[key].img;

    modal.classList.add("active");
}

function closeItem() {
    document.getElementById("itemModal").classList.remove("active");
}

window.onclick = function(e) {
    const modal = document.getElementById("itemModal");
    if (e.target === modal) {
        modal.classList.remove("active");
    }
}