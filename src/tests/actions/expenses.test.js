import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () =>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "123abc"
    })
})

test('should edit expense action object', ()=> {
    const action = editExpense ('123abd', {description: 'des'});
    expect(action).toEqual ({
        type : 'EDIT_EXPENSE',
        id:'123abd',
        updates: {
            description: 'des'
        }
    })
})

test('shuold setup add expense action object with provide values', ()=> {
    const expenseData = {
        description: 'Rent',
        amount: 123123,
        createdAt: 1000,
        note: 'Some notes'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
            
        }
    });
});

test('should setup add expense object with default values', () => {
    const action = addExpense();
    expect(action).toEqual ({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})