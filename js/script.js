const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
const cat = {
    complain: function() {
        return "Meow!";
    }
}
console.log(cat.complain());

// Question 2
const heading = document.querySelector("h3");
heading.textContent = "Updated heading";

// Question 3
heading.style = "font-size: 2em;";

// Question 4
heading.classList.add("subheading");

// Question 5
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};

// Question 6
const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML += "<p>New paragraph</p>"
resultsContainer.style = "background-color: yellow";

// Question 7
function listFunction(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}
listFunction(cats);

// Question 8
function createCats(cats) {
    let finalHTML = "";

    for (let i = 0; i < cats.length; i++) {
        let catsName = cats[i].name;
        let catsAge = cats[i].age;
        if(!catsAge) {
            catsAge = "Age unknown";
        } 

        finalHTML += `<div>
                    <h5>${catsName}</h5>
                    <p>${catsAge}</p>
                </div>`;
    }
    return finalHTML;
};

createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);