import { ThunkAction } from 'redux-thunk';
import { ActionType, createAsyncAction, getType } from 'typesafe-actions';

import { getAll, IProduct } from './productApi';

const fetchAllActions = createAsyncAction(
  '@Products/FETCH_ALL/REQUEST',
  '@Products/FETCH_ALL/SUCCESS',
  '@Products/FETCH_ALL/FAILURE'
)<undefined, IProduct[], Error>();

type FetchAllAction = ActionType<typeof fetchAllActions>;
type FetchAllThunk = ThunkAction<void, any, null, FetchAllAction>;

export const selectProducts = (state: any) => state.products;

export const fetchAll = (): FetchAllThunk => async (dispatch) => {
  try {
    dispatch(fetchAllActions.request());
    dispatch(fetchAllActions.success(await getAll()));
  } catch (e) {
    dispatch(fetchAllActions.failure(e));
  }
};

export function reducer(state: IProduct[] = [], action: FetchAllAction) {
  switch (action.type) {
  case getType(fetchAllActions.request):
    return {
      status: 'loading',
      items: []
    };
  case getType(fetchAllActions.success):
    return {
      status: 'loaded',
      items: action.payload
    };
  case getType(fetchAllActions.failure):
    return {
      status: 'error',
      items: [],
      error: action.payload
    };
  default:
    return { status: null };
  }
}
