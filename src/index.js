import './index.scss';

import './sub.js';

document.getElementById('app').innerHTML = '<p>Hello world</p>'
if(module.hot){
    module.hot.accept(()=>{
        console.log('hot reload');
        // document.getElementById('app').innerHTML = 'hot'
    })
}