import axios from 'axios';

export const axiosCsrf = axios.create({
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRFToken': document.getElementsByName('csrfmiddlewaretoken')[0].value
    }
});

axiosCsrf.interceptors.response.use(response => response, error => {
    console.log(error.response.status);
    if (error.response.status == 403) {
        window.location.href = '/login?next=' + encodeURIComponent(window.location.href);
        return;
    }
    return Promise.reject(error);
});