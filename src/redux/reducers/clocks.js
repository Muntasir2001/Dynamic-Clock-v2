import { clockConstants } from '../actions/clocks';

const initialState = {
    isLoading: true,
    clocks: [],
};
// const initialState = {
//     isLoading: false,
//     clocks: [
//         {
//             _id: '61ab81b5259504b7676985a1',
//             title: 'Dubai',
//             region: 'Asia/Dubai',
//             creator: 'Adam',
//             createdAt: '2021-12-04T14:56:53.059Z',
//             __v: 0,
//         },
//         {
//             _id: 'a1abe6d9259504b7676985be',
//             title: 'Canada',
//             region: 'Canada/Pacific',
//             creator: 'Adam',
//             createdAt: '2021-12-04T22:08:25.537Z',
//             __v: 0,
//         },
//         {
//             _id: 'b1ac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//         {
//             _id: 'c1ac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//         {
//             _id: 'dac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//         {
//             _id: 'e1ac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//         {
//             _id: 'f1ac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//         {
//             _id: 'g1ac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//         {
//             _id: '6hac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//         {
//             _id: 'i1ac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//         {
//             _id: 'j1ac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//         {
//             _id: 'k1ac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//         {
//             _id: 'l1ac41bb259504b7676985c2',
//             title: 'Canada Newfoundland',
//             region: 'Canada/Newfoundland',
//             creator: 'Adam',
//             createdAt: '2021-12-05T04:36:11.833Z',
//             __v: 0,
//         },
//     ],
// };

const clocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case clockConstants.START_LOADING:
            return { ...state, isLoading: true };
        case clockConstants.END_LOADING:
            return { ...state, isLoading: false };

        case clockConstants.FETCH_ALL:
            return { ...state, clocks: action.payload };
        case clockConstants.CREATE:
            return { ...state, clocks: [...state.clocks, action.payload] };
        case clockConstants.UPDATE:
            return {
                ...state,
                clocks: state.clocks.map((clock) =>
                    clock._id === action.payload._id ? action.payload : clock
                ),
            };
        case clockConstants.DELETE:
            return { ...state, clocks: state.clocks.filter((clock) => clock._id !== action.payload) };

        default:
            return state;
    }
};
export default clocksReducer;
