module.exports = {
  name: "Power Management",
  color: "240",
  icon: "/static/icons/icons8_disconnected_96px.png",
  blocks: [
     'axp_power_begin',
     'ischargeing',
     'getbattchargecurrent',
     'getbattdischargecurrent',
     'getvbusvoltage',
     'getvbuscurrent',
     //'getbattinpower',
     'getbattvoltage',
     //'getacinvoltage',
     'getbattpercentage',
     'gettemp',
     {
      xml:
        `<block type="setBlackLight">
          <value name="VALUE">
            <shadow type="math_number">
              <field name="NUM">255</field>
            </shadow>
          </value>
        </block>`
      }
  ]
};
