import {shallow} from 'enzyme';
import AddTodoForm from '../src/components/AddTodoForm'

describe('<AddTodoForm/>',()=>{

    let component;

    beforeEach(()=>{
        component = shallow(<AddTodoForm/>);
    });

    it('length',()=>{
        expect(component).toHaveLength(1);
    })


});