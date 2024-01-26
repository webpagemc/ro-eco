const viewsControllers = {

    home: (req, res)=>{

        res.render("home");
    
    },

    info: (req, res)=>{

        res.render("info");
    
    },

    addProducts: (req, res)=>{

        res.render("addProducts");
    
    },

    manageProducts: (req, res) => {

        res.render("manageProducts");

    }


}

export default viewsControllers;