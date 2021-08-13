/* eslint-disable no-new */
import 'regenerator-runtime/runtime';
import Autocomplete from './Autocomplete';
import usStates from './us-states';
import './main.css';


// US States
const data = usStates.map(state => ({
  text: state.name,
  value: state.abbreviation,
}));
// console.log(data);

let query = 'bz';
let num = 10;
const Url = `https://api.github.com/search/users?q=${query}+&per_page=${num}`;


let per_page = 10;
console.log(Url);
fetch(Url)
.then(res => res.json())
.then(res => {
  console.log
  const gdata = res.items;
  let li = ' '
  gdata.forEach(function (item) {
    console.log(item);
    li += `<li class="result" tabindex="0"> ${item.login} </li>`;

    let resultsUl = document.querySelector('.gh-users-group ul');
    resultsUl.innerHTML = li;
    // resultsUl.classList.remove('hide');
  })
  //MOVE TO OWN FUNCTION
})
.catch((error) => {
  console.log(`Error Fetching data : ${error}`)
  document.getElementById('gh-user').innerHTML = 'Error Loading Github Users'
})

new Autocomplete(document.getElementById('state'), {
  data,
  onSelect: (stateCode) => {
    console.log('selected state:', stateCode);
  },
});


// Github Users
// domStuff() {
    // let gdata = this.gdata;
  // gdata.forEach(function (item) {
  //   // display data here
  //   let ul = document.querySelector('results');
  //   let li = document.createElement('li');
  //   console.log(ul);
  //   ul.appendChild(li);

  // })
// };