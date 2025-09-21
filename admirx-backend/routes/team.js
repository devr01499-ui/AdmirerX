const express = require('express');
const router = express.Router();

// Mock team data - in production, this would come from a database
const teamData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    linkedin: 'https://linkedin.com/in/johndoe',
    bio: 'John has over 15 years of experience in business process outsourcing and digital transformation.',
    email: 'john.doe@admirerx.com'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'COO',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    linkedin: 'https://linkedin.com/in/janesmith',
    bio: 'Jane leads our operations team with expertise in scaling BPO services and client management.',
    email: 'jane.smith@admirerx.com'
  },
  {
    id: 3,
    name: 'Raj Kumar',
    position: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    linkedin: 'https://linkedin.com/in/rajkumar',
    bio: 'Raj oversees our technical operations and ensures seamless service delivery across all clients.',
    email: 'raj.kumar@admirerx.com'
  }
];

// GET /api/team - Get leadership team
router.get('/team', async (req, res) => {
  try {
    res.json({
      success: true,
      data: teamData
    });
  } catch (error) {
    console.error('Get team error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch team data'
    });
  }
});

// GET /api/team/:id - Get specific team member
router.get('/team/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const member = teamData.find(m => m.id === parseInt(id));
    
    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found'
      });
    }

    res.json({
      success: true,
      data: member
    });
  } catch (error) {
    console.error('Get team member error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch team member'
    });
  }
});

module.exports = router;
