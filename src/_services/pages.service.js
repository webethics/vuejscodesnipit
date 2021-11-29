import Config from '../config'
import { requestOptions, handleResponse , headerOptions} from '../_helpers';

export const API_URL = Config.API_URL;

export const pagesService = {
    sendHelpRequest
};

/*
* Help page api
*/
function sendHelpRequest(saveForm) {
    let saveUrl = API_URL+'api/send-help-request';
    return fetch(saveUrl, requestOptions.post(saveForm))
    .then(handleResponse)
    .then(response => {
            return response;
        });
}