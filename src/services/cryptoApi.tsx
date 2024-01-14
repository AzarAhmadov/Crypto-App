import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api' }),
    endpoints: (builder) => ({
        getCrypto: builder.mutation({
            query: () => {
                return {
                    url: `/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`,
                    method: 'get'
                }
            }
        })
    })
})

export const { useGetCryptoMutation } = cryptoApi