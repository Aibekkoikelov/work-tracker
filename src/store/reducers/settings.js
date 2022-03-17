
const initialState = {
   activeSideBar: false
}

const settings = (state = initialState, action) => {
   switch (action.type) {
      case 'TOGGLE_SIDEBAR':
         return {
            ...state,
            activeSideBar: !state.activeSideBar
         }
      default:
         return state
   }
}

export default settings;