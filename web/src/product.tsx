import { ThunkAction } from 'redux-thunk';
import { ActionType, createAsyncAction, getType } from 'typesafe-actions';

import { getById, IProduct } from './productApi';

interface IFetchByIdRequestPayload {
  product_id: string;
}

const fetchByIdActions = createAsyncAction(
  '@Product/FETCH_BY_ID/REQUEST',
  '@Product/FETCH_BY_ID/SUCCESS',
  '@Product/FETCH_BY_ID/FAILURE'
)<IFetchByIdRequestPayload, IProduct, Error>();

type FetchByIdAction = ActionType<typeof fetchByIdActions>;
type FetchByIdThunk = ThunkAction<void, any, null, FetchByIdAction>;

// FIXME <any>
export const selectProduct = (state: any) => state.product;

export const fetchById = (id: string): FetchByIdThunk => async (dispatch) => {
  try {
    dispatch(fetchByIdActions.request({ product_id: id }));
    dispatch(fetchByIdActions.success(await getById(id)));
  } catch (e) {
    dispatch(fetchByIdActions.failure(e));
  }
};

const initialState: Partial<IProduct> & { status: null } = {
  status: null
};

// TODO: TS should complain if not all action types are covered by this reducer
export function reducer(state = initialState, action: FetchByIdAction) {
  switch (action.type) {
  case getType(fetchByIdActions.request):
    return {
      status: 'loading'
    };
  case getType(fetchByIdActions.success):
    return {
      ...action.payload,
      status: 'loaded'
    };
  case getType(fetchByIdActions.failure):
    return {
      status: 'error',
      error: action.payload
    };
  default:
    return state;
  }
}
