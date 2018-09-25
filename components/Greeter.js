class Greeter{
    constructor(dispatch){
        this.input = document.createElement('input');
        this.element = document.createElement('div');
        
        this.input.placeholder = "What is you're Designation User?";
        this.input.addEventListener(
            'keyup',
            () => dispatch(
                (state) => Object.assign(
                    state,
                    { 'greeting': this.input.value }
                )
            )
        );
        
        this.element.appendChild(this.input);
    }

    render(parent){
        parent.appendChild(this.element);
    }
}
export default Greeter;