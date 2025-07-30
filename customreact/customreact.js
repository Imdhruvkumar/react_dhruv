function customrender(reactelement,maincontainer){
    // const domelement=document.createElement(reactelement.type)
    // domelement.innerHTML = reactelement.children
    // domelement.setAttribute ('href',reactelement.props.href)
    //  domelement.setAttribute ('target',reactelement.props.target)
    //  maincontainer.appendChild(domelement)
    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    for (const prop in reactelement.props) {
        if(prop==="children")continue;
        domelement.setAttribute( prop,reactelement.props[prop])
        
       
    }
     maincontainer.appendChild(domelement)
}
const reactelement= {
    type:'a',
    props:{
        href:"https//gogle.com",
        target:'_blamk'
    },
    children:'click me to visit gogle'
}
const maincontainer = document.querySelector('#root')

customrender(reactelement,maincontainer)