const express = require('express');
const router = express.Router();

// Mock services data - in production, this would come from a database
const servicesData = [
  {
    id: 1,
    title: 'Customer Support',
    description: '24/7 omnichannel customer support across phone, email, and chat — reduce operational costs while increasing satisfaction.',
    icon: '🎧',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/845/845339.png',
    features: [
      '24/7 availability',
      'Multi-channel support',
      'Multilingual support',
      'Real-time monitoring'
    ],
    pricing: 'Starting from $15/hour'
  },
  {
    id: 2,
    title: 'Technical Helpdesk',
    description: 'Specialist teams with SLA-driven response times to improve uptime and reliability for your clients.',
    icon: '🛠️',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2699/2699472.png',
    features: [
      'SLA-driven response times',
      'Specialist technical teams',
      'Proactive monitoring',
      'Incident management'
    ],
    pricing: 'Starting from $25/hour'
  },
  {
    id: 3,
    title: 'Data Processing',
    description: 'Accurate and automated data entry, report generation and verification at scale.',
    icon: '💾',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3352/3352756.png',
    features: [
      'Automated data entry',
      'Report generation',
      'Data verification',
      'Quality assurance'
    ],
    pricing: 'Starting from $12/hour'
  },
  {
    id: 4,
    title: 'Back-Office Operations',
    description: 'Handle repetitive processes and free up your core team with secure, efficient back-office support.',
    icon: '🏢',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/732/732093.png',
    features: [
      'Process automation',
      'Secure data handling',
      'Efficient workflows',
      'Cost reduction'
    ],
    pricing: 'Starting from $18/hour'
  },
  {
    id: 5,
    title: 'Quality Assurance',
    description: 'Maintain high standards with our dedicated QA teams monitoring your workflows end-to-end.',
    icon: '✅',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/561/561094.png',
    features: [
      'End-to-end monitoring',
      'Quality metrics',
      'Process improvement',
      'Compliance management'
    ],
    pricing: 'Starting from $20/hour'
  },
  {
    id: 6,
    title: 'Process Automation',
    description: 'Leverage AI and automation to streamline operations, cut costs, and speed up delivery.',
    icon: '🤖',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/6863/6863135.png',
    features: [
      'AI-powered automation',
      'Workflow optimization',
      'Cost reduction',
      'Faster delivery'
    ],
    pricing: 'Starting from $30/hour'
  }
];

// GET /api/services - Get all services
router.get('/services', async (req, res) => {
  try {
    res.json({
      success: true,
      data: servicesData
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services data'
    });
  }
});

// GET /api/services/:id - Get specific service
router.get('/services/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const service = servicesData.find(s => s.id === parseInt(id));
    
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    console.error('Get service error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service'
    });
  }
});

module.exports = router;
