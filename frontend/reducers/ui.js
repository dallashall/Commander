// import loading/resolve actions from util

const defaultState = {
  loading: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'replaceMe':
      return { loading: action.loading };
    default:
      return defaultState;
  }
}