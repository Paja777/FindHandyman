import { rest } from 'msw'

export const handlers = [
    rest.get("http://localhost:5000/", (req, res, ctx) => {
        return
    })
]