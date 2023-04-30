import axios from "axios";

const customFetch = axios.create({
    baseURL:"https://api.unsplash.com/search/collections?client_id=_TtWfqer8BHaBPryryLDqrCvS_TzDUonom9VbopUJtg&page=1&query="
})

export default customFetch