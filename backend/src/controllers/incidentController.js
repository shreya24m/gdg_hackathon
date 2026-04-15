let incidents = [];

const createIncident = (req, res) => {
    const { title, description, location } = req.body;
    if(!title || !location) {
        return res.status(400).json({ message: 'Title and location are required' });
    }
    const newIncident = { id: Date.now().toString(), 
        title, 
        description, 
        location, status: 'pending', 
        createdAt: new Date()
    }
    incidents.push(newIncident);
    console.log('New incident created:', newIncident);
    res.status(201).json(newIncident);
}

const getIncidents = (req, res) => {
    res.json(incidents);
} 

module.exports = { createIncident, getIncidents };
