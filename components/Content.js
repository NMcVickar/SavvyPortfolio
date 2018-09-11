import * as Pages from './Pages';

export default function content(state){
    return `
<div id=content>
    <div class="container">
    ${Pages[state.body]}
    </div>
</div>
`;
}