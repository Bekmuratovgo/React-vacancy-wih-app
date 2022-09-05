
export interface CardProps {
    item: {
        url: string,
        address: {
            city: string,
            geo: {
                lat: string,
                lng: string
            },
            street: string,
            suite: string,
            zipcode: string
        },
        albumId: number,
        body: string,
        email: string,
        id: number,
        name: string,
        phone: string,
        thumbnailUrl: string,
        title: string,
        userId: number,
        userName: string,
        website: string
        company: {
            bs: string,
            catchPhrase: string,
            name: string
        }
    }
}

export type MappedDataItem = {
    url: string,
    address: {
        city: string,
        geo: {
            lat: string,
            lng: string
        },
        street: string,
        suite: string,
        zipcode: string
    },
    albumId: number,
    body: string,
    email: string,
    id: number,
    name: string,
    phone: string,
    thumbnailUrl: string,
    title: string,
    userId: number,
    userName: string,
    website: string
    company: {
        bs: string,
        catchPhrase: string,
        name: string
    }
}

export type IStateInitial = {
    data: [],
    name: null | string,
    isLoading: boolean,
    error: string,
}

export interface ISelectorState {
    dataSlice: IStateInitial
}

export interface IActionTypes {
    type: string,
    payload: MappedDataItem[] | string | boolean | null,
}