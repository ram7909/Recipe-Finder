const fetchData = async (get) => {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${get}`)
    const data = await api.json()
    console.log(data.meals);

    const showData = document.querySelector('.show');

    showData.innerHTML = data.meals.map((item) =>
        `<div>
    <img src=${item.strMealThumb} alt="" style="width:280px">
    <h4>${item.strMeal}</h4>
    </div>`).join(" ")
}
fetchData("british")

let indian = document.querySelector('#a');
let canadian = document.querySelector('#b');
let american = document.querySelector('#c');
let chinese = document.querySelector('#d');


indian.addEventListener('click',()=>{
    fetchData("indian")
})
canadian.addEventListener('click',()=>{
    fetchData("canadian")
})
american.addEventListener('click',()=>{
    fetchData("american")
})
chinese.addEventListener('click',()=>{
    fetchData("chinese")
})
