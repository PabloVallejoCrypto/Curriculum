import { createStore } from 'redux'

const initialState = {
  marks: [],
  accounts: [],
  faceUrl: ["https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"],
  neuralUrl: ["https://images.pexels.com/photos/8276230/pexels-photo-8276230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"],
  faceDesc: [{faces: [{age_range: [0,100], cultural_appearance: "Cool"}]}],
  neuralDesc: [{output: "Business boy."}]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'newMark':
      initialState.marks.push(action.payload);
      return initialState;
    case 'accounts':
      initialState.accounts.push(action.payload);
      return initialState;
    case 'faceUrl':
      initialState.faceUrl.push(action.payload);
      return initialState;
    case 'faceDesc':
      initialState.faceDesc.push(action.payload);
      return initialState;
      case 'neuralUrl':
      initialState.neuralUrl.push(action.payload);
      return initialState;
    case 'neuralDesc':
      initialState.neuralDesc.push(action.payload);
      return initialState;
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;