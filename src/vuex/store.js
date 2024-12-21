
import { createStore } from 'vuex'

const store = createStore({

    //这里是状态
    state() {
        return {
            IsShowLogin: false,
            IsShowRegister: false,
            NickName: localStorage["NickName"]//昵称，登录成功后赋值
        }
    },

    //mutations :(形式或结构的)转变，改变
    //这里是要用的方法，方法来操作上面的【状态state】
    mutations: {

        //方法1
        OpenLogin(state) {
            state.IsShowLogin = true;
        },

        //方法2
        CloseLogin(state) {
            state.IsShowLogin = false;
        },

        //方法3
        OPenRegister(state) {
            state.IsShowRegister = true;
        },

        //方法4
        CloseRegister(state) {
            state.CloseRegister = true;

        },

        //方法5
        SettingNickName(state, NickName) {
            state.NickName = NickName
        }
    }

})

export default store;