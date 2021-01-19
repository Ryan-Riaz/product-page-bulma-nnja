// for activating the burger menu

// select burger-icon
const bugerIcon = document.querySelector("#burger-icon");

// select navLinks id
const navLinks = document.querySelector("#nav-links");

// if burger-icon clicks it toggles the is-active class
bugerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("is-active");
});

// tabbed item

// grasp all the li element from tabs class
const tabs = document.querySelectorAll(".tabs li");

// grasp all direct children of tab-content id
const tabContent = document.querySelectorAll("#tab-content > div");

// select only a tab by looping
tabs.forEach((tab) => {
    // when click event fired
    tab.addEventListener("click", () => {
        // each tab removes is-active class
        tabs.forEach((item) => item.classList.remove("is-active"));
        // but selected tab adds is-active class
        tab.classList.add("is-active");
        //select the data attribute
        const target = tab.dataset.target;
        // select only a div
        tabContent.forEach((box) => {
            // if a div has id and it is equal target value
            //we can also write box.id === target
            if (box.getAttribute("id") === target) {
                // that box removes the class is-hidden
                box.classList.remove("is-hidden");
            } else {
                // rest of the boxes add the class is-hidden
                box.classList.add("is-hidden");
            }
        });
    });
});

// Modal

// select the sign up button
const signUp = document.querySelector("#sign-up");

// select modal background class
const modalBg = document.querySelector(".modal-background");

// select modal class
const modal = document.querySelector(".modal");

// if the button click
signUp.addEventListener("click", () => {
    // is-active class is activated
    modal.classList.add("is-active");
});

// if background clicks
modalBg.addEventListener("click", () => {
    // is-active class removes
    modal.classList.remove("is-active");
});
