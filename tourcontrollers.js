const updatetour = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedtour = req.body;
    const tour = tourmodel.updatetourbyid(id, updatedtour);
    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({ error: 'Tour not found' });
    }
};


const searchtour = (req, res) => {
    const destination = req.query.destination;
    if (!destination) {
        return res.status(400).json({ error: 'destination query parameter is required' });
    }
    const tours = tourmodel.searchtour(destination);
    res.json(tours);
};
