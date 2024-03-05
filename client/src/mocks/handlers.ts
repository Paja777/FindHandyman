import { rest } from 'msw'

export const handlers = [
    rest.get("http://localhost:5000/ad", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    _id: 'sdfsefsdf343',
    name: 'Pavle',
    category: 'programiranje',
    services: [{programiranje: "$1000"}],
    images: [],
    rating: 5,
    description: 'Bla bla bla bla',
    note: '',
    adRole: "Handyman",
    user_id: 'asdasdas1234',
    adCreatorRating: 5,
                }
            ])
        )
    })
]