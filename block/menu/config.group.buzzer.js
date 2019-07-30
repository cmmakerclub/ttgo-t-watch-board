module.exports = {
  name: "Buzzer",
  color: "230",
  icon: "/static/icons/icons8_musical_notes_96px.png",
  blocks: [
    "music_begin",
    "music_buzzer_note",
    // "music_duration_opt",
    // 'music_buzzer_frequency'
    {
      xml:
        `<block type="music_buzzer_frequency">
                        <value name="FREQUENCY">    
                            <shadow type="math_number">
                                <field name="NUM">262</field>
                            </shadow>
                        </value>
                        <value name="DURATION">                    
                            <shadow type="math_number">
                                <field name="NUM">500</field>
                            </shadow>
                        </value>
                    </block>`
    }
    // 'music_set_volume'
    // 'music_get_volume'
  ]
};
