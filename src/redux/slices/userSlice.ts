import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  user: {
    "gender": "",
    "name": {
      "title": "",
      "first": "",
      "last": ""
    },
    "location": {
      "street": {
        "number": 0,
        "name": ""
      },
      "city": "",
      "state": "",
      "country": "",
      "postcode": 0,
      "coordinates": {
        "latitude": "",
        "longitude": ""
      },
      "timezone": {
        "offset": "",
        "description": ""
      }
    },
    "email": "",
    "login": {
      "uuid": "",
      "username": "",
      "password": "",
      "salt": "",
      "md5": "",
      "sha1": "",
      "sha256": ""
    },
    "dob": {
      "date": "",
      "age": 0
    },
    "registered": {
      "date": "",
      "age": 0
    },
    "phone": "",
    "cell": "",
    "id": {
      "name": "",
      "value": ""
    },
    "picture": {
      "large": "",
      "medium": "",
      "thumbnail": ""
    },
    "nat": ""
  },
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUserList: (state: any, action: PayloadAction<any>) => {
            state.list = action.payload;
        },
        setUser: (state: any, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        resetUser: (state:any) => {
            state.user = initialState.user;
        }
    }
}) 

export const {setUserList, setUser, resetUser} = userSlice.actions;

export default userSlice.reducer;