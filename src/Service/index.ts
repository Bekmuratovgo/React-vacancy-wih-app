import axios from "axios";
import { CardProps } from "../interface";

const base_url: any = process.env.REACT_APP_BASE_URL
const endpoints = {
    getPosts: process.env.REACT_APP_POSTS,
    getUsers: process.env.REACT_APP_USERS,
    getPhotos: process.env.REACT_APP_PHOTOS,
}

export default class ProfileService {
    static async $getPosts() {
        const resPost = await axios.get(base_url + endpoints.getPosts);
        const resUser = await axios.get(base_url + endpoints.getUsers);
        const resPhoto = await axios.get(base_url + endpoints.getPhotos);

        // специально сократил кол-во объектов так как в некоторых запросах по 5 тыс объектов
        const res = await Promise.all([resPost.data.slice(0, 30), resUser.data, resPhoto.data.slice(0,30)])
            .then((value) => value)

        const filteredRes: CardProps[] = []; 

        res[0].forEach((post: any) => {
            res[1].map((user: any) => {
                res[2].forEach((photo: any) => {
                    if (post.id === user.id && user.id === photo.id) {
                        filteredRes.push({...post, ...user, ...photo});
                    }
                })
            })
        });
        return filteredRes;
    }
}