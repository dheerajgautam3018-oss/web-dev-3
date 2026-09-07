
const tourmodel = require(". ./models/tourmodel");
//get by id(it all belongs to models)
const getbyid = (id) => {
    const tours = getall();
    if (tour) {
        res.json(tour)
    }
    return turs.find((tour) => tour.id === id);
}

//add new tour
const addtour = (newtour) => {
    const tours = getall();
    tours.push(newTour);
    fs.writefilesync(filepath, json.stringify(tours));  // new tour add krte h json file me
    return newTour;
}

//dlete tour by id
const deletetourbyid = (id) => {
    const tours = getall();
    const updatedtours =tours.filter((tour) => tour.id !== id);
    fs.writefilesynic(filepath, json,)
}


module.exports = {
    getAlltours,
    gettourbyid,
    addtour,
    deletetourbyid,
    updatetourbyid,
    searchtour,
    searchTour,
}














//get all yours(its all belongs to  controlller)
const getallyours = (req, res) => {
    const tours = tourmodel.getall();
    res.json(tours);
};

const gettourbyid = (req, res) => {
    const id = parseint(req.params.id);
    const tour = tourmodel.getbyid(id);
    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({ error: 'Tour not found' });  // rearrange the route
    }
};


const express = require('express');
const app = express();
app.use(express.json());
const router = express.router();
const toourcontroller = require('../controllers/tourcontroller');





//updating the existing parameters(updating byid)
const updatetourbyid = (id, updatedtour) => {
    const tours = getall();
    const tourindex = tours.findIndex((tour) => tour.id === id);
    if (tourindex !== -1) {
        tours[tourindex] = { ...tours[tourindex], ...updatedtour };          // preserving the index  and populate updated tours
        fs.writefilesync(filepath, json.stringify(tours));
        return tours[tourindex];
    }
    return null;
};
// index is part of array but may be the part of file is



const searchtour = (destination) => {
    const tours = getall();
    return tours.filter((tour) => tour.destination === destination);
    destination.tolowercase() === destination.tolowercase();
};

//make it all in user prespective (hw)


//searching the tours by location and price range
const searchTour = (location, minPrice = 0, maxPrice = Infinity) => {
    const tours = getall();

    return tours.filter((tour) => {
        return (
            tour.location.toLowerCase() === location.toLowerCase() &&
            tour.price >= minPrice &&
            tour.price <= maxPrice
        );
    });
};



