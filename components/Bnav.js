function Link(link){
    var href = '';

    if(link !== 'Home'){
        href = link;
    }
    
    return `
      <li>
        <a href="/${href}" data-navigo>${link}</a>
      </li>    
    `;
}

export default function Bnav(state){
    var links = state
        .links
        .reduce((acc, link) => acc += Link(link),
            ''
        );

    return `
<div id="Bnav">
    <ul class="container">
   ${links}
    </ul>
</div>
`;
}