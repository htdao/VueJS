export default {
    namespaced: true,
    state: {
        // Khai báo state
        tableData: [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }
        ],
    },
    getters: {
        // Khai báo getters
    },
    mutations: {
        // Khai báo mutations
        deleteProduct(state, value){
            state.tableData.splice(value,1)
        }
    },
}