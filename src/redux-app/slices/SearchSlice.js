import data from '../../data.json';
const {createSlice} = require('@reduxjs/toolkit');

const SearchSlice = createSlice({
    name:"slices/SearchSlice",
    initialState:{
        data: data,
        searchData:'',
        filteredId:'',
        isCompleted: false,
    },
    reducers:{
        setSearchData:(state,action) => {
            state.searchData=(action.payload);

        },
        filterSearchData:(state)=>{
          const data = state.data;
          data.map((item) => {
            item.title = item.title.toLowerCase();
            if(state.searchData.toLowerCase() === item.title){
                state.filteredId = item.id
                console.log(state.filteredId,"filteredid")
                state.isCompleted = true;   
            }
          })
        }
    }
});



export const {setSearchData, filterSearchData}=SearchSlice.actions;
export default SearchSlice.reducer