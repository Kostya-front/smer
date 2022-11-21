import {store} from "core-js/internals/reflect-metadata";

export const state = () => {
  return {
    stateGlobal: true
  }
}
export const getters = {
  stateGlobal: state => state.stateGlobal
}
