module.exports = {
  name: "Time",
  color: "230",
  icon: "/static/icons/icons8_Story_Time_96px.png",
  blocks: [
    {
        xml : 
        `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml :
                        `<block type="time_delay_microsec">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
                },
                "time_millis",
        "time_micros"
  ]
};
