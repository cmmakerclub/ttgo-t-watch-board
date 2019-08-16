module.exports = {
  name: "Power Management",
  color: "240",
  icon: "/static/icons/bh1745.jpg",
  blocks: [
     'axp_power_begin',
     'ischargeing',
     'getbattchargecurrent',
     'getbattdischargecurrent',
     'getvbusvoltage',
     'getvbuscurrent',
     //'getbattinpower',
     'gettemp',
     'getbattvoltage',
     //'getacinvoltage',
     'getbattpercentage'
  ]
};
