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

const Url = "https://api.github.com/search/users?q=bz&per_page=10";
fetch(Url)
.then(ghdata=>{return ghdata.json()})
// .then(data=>{console.log(data)})
.then(res=>{console.log(res)})

new Autocomplete(document.getElementById('state'), {
  data,
  onSelect: (stateCode) => {
    console.log('selected state:', stateCode);
    console.log(data);
  },
});


// Github Users
new Autocomplete(document.getElementById('gh-user'), {
  onSelect: (ghUserId) => {
    console.log('selected github user id:', ghUserId);
    console.log('selected');
  },
});
