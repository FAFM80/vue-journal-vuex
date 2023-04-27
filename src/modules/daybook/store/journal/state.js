export default ()=>({
    isLoading:true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text:'Lorem ullamco esse officia deserunt.',
            picture:null,

        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text:'Ullamco magna ullamco officia anim eu amet.',
            picture:null,

        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text:'Magna ipsum minim sunt eu veniam.',
            picture:null,

        },
    ]
})