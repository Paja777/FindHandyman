
export interface Ad{
    _id: string;
    name: string;
    category: string;
    services: {}[];
    images: string;
    rating: number;
    description: string;
    note?: string;
    adRole: string;
    user_id: string;
    adCreatorRating?: number;
}
