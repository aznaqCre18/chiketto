import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';

import {
    logger,
    promise
} from './middleware';

import loginR from '../_reducers/LoginR'
import registerR from '../_reducers/registerR'
import findUser from '../_reducers/getUserR'
import addTiketR from '../_reducers/addTiketR'
import allTiketR from '../_reducers/allTiketR'
import tiketUserR from '../_reducers/tiketUserR'
import paymentR from '../_reducers/paymentR'

const reducers = combineReducers({
    loginR,
    registerR,
    findUser,
    addTiketR,
    allTiketR,
    tiketUserR,
    paymentR
})

const store = createStore(reducers, applyMiddleware(logger, promise))

export default store