
console.log('oK');

  module.exports = function(){
    document.querySelector('img').addEventListener('click',()=>{
      console.log('click in button!!!');
    })
    let links=document.createElement('ul');
    let linksTwo=document.createElement('ul');
    let linksThree=document.createElement('ul');

    document.querySelector('body > main > aside').append(links);
    document.querySelector('body > main > aside').append(linksTwo);
    document.querySelector('body > main > aside').append(linksThree);
    document.querySelector('body > main > aside > ul:nth-child(1)').innerHTML=`<li><a href='/'>Team</a></li>`;
    document.querySelector('body > main > aside > ul:nth-child(2)').innerHTML=`<li><a href='/about'>about</a></li>`;
    document.querySelector('body > main > aside > ul:nth-child(3)').innerHTML=`<li><a href='/contact'>contact</a></li>`;
}
