//TODO  Making an API request  for Yelp

import axios from "axios";


export default axios.create(
    {
        //TODO Root URL to make the API Request
        baseURL:"https://api.yelp.com/v3/businesses",
        headers:{
            Authorization:"Bearer ezJ5gDj8mWOUjlsSE40StBZ_Q6Yevo2lYJKH5k8F8-aUuHNaQ5lGo1rYKacfXWlWM_Z0_XTX8mu9qQmZbuIM4MLcgQMg3dhmLPXJnC67qrh5t2jqfs4FVlmk4BvyY3Yx"
            // Authorization:"Bearer ezJ5gDj8mWOUjlsSE40StBZ_Q6Yevo2lYJKH5k8F8-aUuHNaQ5lGo1rYKacfXWlWM_Z0_XTX8mu9qQmZbuIM4MLcgQMg3dhmLPXJnC67qrh5t2jqfs4FVlmk4BvyY3Yx"
        }
    }
)

