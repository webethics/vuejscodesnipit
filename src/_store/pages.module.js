import { pagesService } from '../_services';
const state = {
    error : {},
    newHelpRequest : {},
    saveHelpLoading : false,
};

const actions = {
    sendHelpRequest({dispatch,commit},helpRequest){
        commit('sendNewHelpRequest');
        pagesService.sendHelpRequest(helpRequest)
            .then(
                response => {
                    commit('sendNewHelpRequestSuccess', response)
                    if(response.message)
                        dispatch('alert/success', response.message, { root: true });
                    else
                        dispatch('alert/success', 'Successfully send help request', { root: true });

                },
                error => {
                    commit('sendNewHelpRequestFailure', error)
                    setTimeout(() => {
                        let message = error;
                        if(typeof (error) == 'object'){
                            message = error.message;
                        }
                        dispatch('alert/error', message, { root: true });
                    })

                }
            );
    },
};

const mutations = {
    sendNewHelpRequest(state){
        state.saveHelpLoading = true;
        state.error = '';
    },
    sendNewHelpRequestSuccess(state,response){
        state.saveHelpLoading = false;
        state.newHelpRequest = response;
    },
    sendNewHelpRequestFailure(state,error){
        state.saveHelpLoading = false;
        state.error = error.error;

        setTimeout(() => {
            state.error = '';
        },5000);
    },
};

export const pages = {
    namespaced: true,
    state,
    actions,
    mutations
};